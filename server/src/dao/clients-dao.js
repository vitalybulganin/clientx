// Connecting to database.
const {Database} = require('./database');

class ClientsDao
{
    constructor(connection)
    {
        this.db = new Database(connection);
    }

    /**
     * Gets a list of clients.
     * @returns {Promise<Array>}
     */
    getClients()
    {
        const items = [];

        return this.db.query('SELECT c.id, c.enabled, c.created, c.comment, p.id as profileId, p.firstName, p.lastName, p.secondName, DATE_FORMAT(p.birthday, "%Y-%m-%d") AS birthday, p.gender FROM swschool.clients c left join swschool.profiles p on c.profileId = p.id ORDER BY c.id;')
            .then(clients => {
                clients.map(client => {
                    return this.getClientContacts(client)
                        .then(contacts => {
                            const ocontacts = [];
                            // Saving the list of contacts.
                            contacts.map(contact => {
                                ocontacts.push({
                                    id: contact.id,
                                    type: contact.type,
                                    value: contact.contact,
                                    comment: contact.comment
                                });
                            });
                            const clientItem = {
                                id: client.id,
                                lastName: client.lastName,
                                firstName: client.firstName,
                                secondName: client.secondName,
                                birthday: client.birthday,
                                gender: client.gender,
                                comment: client.comment,
                                profileId: client.profileId,
                                enabled: client.enabled,
                                created: client.created,
                                contacts: ocontacts
                            };
                            // Adding a new client into collection.
                            items.push(clientItem);
                        })
                        .catch(err => {throw (err);});
                });
                return this.db.forward();
            })
            .then(() => {
                return items;
            })
            .catch(err => {console.log('[ERROR] ' + err); throw (err);});
    }

    getClientContacts(client)
    {
        return this.db.query('SELECT id, type, contact, comment FROM swschool.contacts WHERE profileId = ?;', client.profileId);
    }

    addClient(client)
    {
        return this.db.query('INSERT INTO swschool.profiles(firstName, lastName, secondName, birthday, gender, created, comment) VALUES(?, ?, ?, ?, ?, now(), ?);', [client.firstName, client.lastName, client.secondName, client.birthday, client.gender, client.comment])
            .then(() => {
                // Getting a new profile id.
                return this.db.getInsertedId()
                    .then((id) => {
                        client.profileId = id;
                        console.log(client);
                        return this.db.forward()
                        .then(() => {
                            return this.db.query('INSERT INTO swschool.clients(profileId, enabled, created, comment) VALUES(?, ?, now(), ?);', [client.profileId, client.enabled, client.comment])
                                    .then(() => {
                                        return this.db.getInsertedId()
                                            .then((clientId) => {
                                                // Saving a new client id.
                                                client.id = clientId;

                                                client.contacts.map(contact => {
                                                    return this.db.query('INSERT INTO swschool.contacts(profileId, type, contact, created, comment) VALUES(?, ?, ?, now(), ?);', [client.profileId, contact.type, contact.value, contact.comment])
                                                        .then(() => {
                                                            return this.db.getInsertedId().then(contactId => {contact.id = contactId; return this.db.forward();}).catch(err => {throw (err);});
                                                        })
                                                        .catch(err => {throw (err);});
                                                });
                                            })
                                            .catch(err => {throw (err);});
                                    })
                                    .catch(err => {throw (err);});
                        })
                        .catch(err => {throw (err);});
                    });
            })
            // .then(() => {return this.close();})
            .catch(err => {throw (err);});
    }

    updateClient(client)
    {
        return this.db.query('UPDATE swschool.profiles SET firstName = ?, lastName = ?, secondName = ?, birthday = ?, gender = ?, comment = ? WHERE id = ?;',
                               [client.firstName, client.lastName, client.secondName, client.birthday, client.gender, client.comment, client.profileId])
            .then(() => {
                return this.db.query('UPDATE swschool.clients SET enabled = ?, comment = ? WHERE id = ?;', [client.enabled, client.comment, client.id])
                    .then(() => {
                        return this.db.query('DELETE FROM swschool.contacts WHERE profileId = ?;', client.profileId)
                            .then(() => {
                                client.contacts.map(contact => {
                                    return this.db.query('INSERT INTO swschool.contacts(profileId, type, contact, created, comment) VALUES(?, ?, ?, now(), ?);', [client.profileId, contact.type, contact.value, contact.comment])
                                        .then(() => {
                                            return this.db.getInsertedId().then(id => {contact.id = id; return this.db.forward();}).catch(err => {throw (err);});
                                        })
                                        .catch(err => {throw (err);});
                                });
                            }).catch(err => {throw (err);});
                    }).catch(err => {throw (err);});
            })
            // .then(() => {return this.close();})
            .catch(err => {throw (err);});
    }

    deleteClient(client)
    {
        return this.db.query('DELETE FROM swschool.contacts WHERE profileId = ?;', client.profileId)
            .then(() => {
                return this.db.query('DELETE FROM swschool.profiles WHERE id = ?;', client.profileId)
                    .then(() => {
                        return this.db.query('DELETE FROM swschool.clients WHERE id = ?;', client.id).catch(err => {throw (err);});
                    }).catch(err => {throw (err);});
            })
            .catch(err => {throw (err);});
    }

    close()
    {
        return this.db.close();
    }
}
module.exports = {ClientsDao};

