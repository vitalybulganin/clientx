// Connecting to database.
const {Database} = require('./database');
const {SkillsDao, RatesDao} = require('./dictionary');

class IntructorsDao
{
    /**
     * Constructor.
     * @param connection [in] - A connection.
     */
    constructor(connection)
    {
        this.db = new Database(connection);
        this.rates = new RatesDao(connection);
        this.skillsDao = new SkillsDao(connection);
        this.ratesDao = new RatesDao(connection);
    }

    /**
     *
     * @returns {Promise<any>}
     */
    getInstructors()
    {
        const instructors = [];
        let ocontacts = [];
        const skills = [];
        let selectedSkills = [];
        const rates = [];
        const oprices = [];
        //
        return this.skillsDao.getSkills()
            .then(items => {
                items.map(item => {
                    skills.push({
                        id: item.id,
                        name: item.name,
                        color: item.color,
                        created: item.created,
                        comment: item.comment
                    });
                });
            })
            .then(() => {
                return this.ratesDao.getRates()
                    .then(rateRows => {
                        rateRows.map(rateRow => {
                            rates.push(rateRow);
                        });
                    })
                    .then(() => {
                        return this.db.query('SELECT c.id, c.created, c.comment, p.id as profileId, p.firstName, p.lastName, p.secondName, DATE_FORMAT(p.birthday, "%Y-%m-%d") AS birthday, p.gender FROM swschool.instructors c left join swschool.profiles p on c.profileId = p.id ORDER BY c.id;')
                            .then(rows => {
                                rows.map(instructor => {
                                    const clientItem = {
                                        id: instructor.id,
                                        lastName: instructor.lastName,
                                        firstName: instructor.firstName,
                                        secondName: instructor.secondName,
                                        birthday: instructor.birthday,
                                        gender: instructor.gender,
                                        comment: instructor.comment,
                                        profileId: instructor.profileId,
                                        created: instructor.created,
                                        contacts: ocontacts,
                                        skills: skills,
                                        selectedSkills: selectedSkills,
                                        rates: rates,
                                        selectedRates: [],
                                        prices: oprices,
                                        selectedPrices: []
                                    };
                                    // Adding a new client into collection.
                                    instructors.push(clientItem);
                                });
                            })
                            .then(() => {
                                instructors.map(instructor => {
                                    return this.getContacts(instructor)
                                        .then(contacts => {
                                            ocontacts = [];
                                            // Saving the list of contacts.
                                            contacts.map(contact => {
                                                ocontacts.push({
                                                    id: contact.id,
                                                    type: contact.type,
                                                    value: contact.contact,
                                                    comment: contact.comment
                                                });
                                            });
                                        })
                                        .then(() => {
                                            // Getting a list of selected skills.
                                            return this.getSelectedSkills(instructor)
                                                .then(skillRows => {
                                                    selectedSkills = [];
                                                    skillRows.map(selectedSkill => {
                                                        instructor.selectedSkills.push(selectedSkill);
                                                    });
                                                });
                                        });
                                });
                            })
                            .then(() => {console.log(instructors); return instructors;})
                            .catch(err => {throw (err);});
                    });
            });
    }

    /**
     * Adds a new instructor.
     * @param instructor [in] - A new instructor.
     * @returns {Promise<any>}
     */
    addInstructor(instructor)
    {
        console.log(instructor);

        return this.db.query('INSERT INTO swschool.profiles(firstName, lastName, secondName, birthday, gender, created, comment) VALUES(?, ?, ?, ?, ?, now(), ?);', [instructor.firstName, instructor.lastName, instructor.secondName, instructor.birthday, instructor.gender, instructor.comment])
            .then(() => {
                // Getting a new profile id.
                return this.db.getInsertedId()
                    .then((id) => {
                        instructor.profileId = id;
                        return this.db.forward()
                            .then(() => {
                                return this.db.query('INSERT INTO swschool.instructors(profileId, created, comment) VALUES(?, now(), ?);', [instructor.profileId, instructor.comment])
                                    .then(() => {
                                        return this.db.getInsertedId()
                                            .then((instructorId) => {
                                                // Saving a new client id.
                                                instructor.id = instructorId;

                                                instructor.contacts.map(contact => {
                                                    console.log(instructor);
                                                    return this.db.query('INSERT INTO swschool.contacts(profileId, type, contact, created, comment) VALUES(?, ?, ?, now(), ?);', [instructor.profileId, contact.type, contact.value, contact.comment])
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
            .then(() => {return instructor;})
            .catch(err => {throw (err);});
    }

    /**
     * Updates instructor.
     * @param instructor
     * @returns {Promise<any>}
     */
    updateInstructor(instructor)
    {
        return this.db.query('UPDATE swschool.profiles SET firstName = ?, lastName = ?, secondName = ?, birthday = ?, gender = ?, comment = ? WHERE id = ?;',
            [instructor.firstName, instructor.lastName, instructor.secondName, instructor.birthday, instructor.gender, instructor.comment, instructor.profileId])
            .then(() => {
                return this.db.query('UPDATE swschool.instructors SET comment = ? WHERE id = ?;', [instructor.comment, instructor.id])
                    .then(() => {
                        return this.db.query('DELETE FROM swschool.contacts WHERE profileId = ?;', instructor.profileId)
                            .then(() => {
                                instructor.contacts.map(contact => {
                                    return this.db.query('INSERT INTO swschool.contacts(profileId, type, contact, created, comment) VALUES(?, ?, ?, now(), ?);', [instructor.profileId, contact.type, contact.value, contact.comment])
                                        .then(() => {
                                            return this.db.getInsertedId().then(id => {contact.id = id; return this.db.forward();}).catch(err => {throw (err);});
                                        })
                                        .catch(err => {throw (err);});
                                });
                            }).catch(err => {throw (err);});
                    }).catch(err => {throw (err);});
            })
            .then(() => {return instructor;})
            .catch(err => {throw (err);});
    }

    /**
     *
     * @param instructor
     * @returns {Promise<any>}
     */
    deleteInstructor(instructor)
    {
        return this.db.query('DELETE FROM swschool.contacts WHERE profileId = ?;', instructor.profileId)
            .then(() => {
                return this.db.query('DELETE FROM swschool.profiles WHERE id = ?;', instructor.profileId)
                    .then(() => {
                        return this.db.query('DELETE FROM swschool.clients WHERE id = ?;', instructor.id).catch(err => {throw (err);});
                    })
                    .then(() => {return instructor;})
                    .catch(err => {throw (err);});
            })
            .then(() => {return instructor;})
            .catch(err => {throw (err);});
    }

    /**
     * Gets a list of instructor contacts.
     * @param instructor [in] - Instructor.
     * @returns {Promise<any>}
     */
    getContacts(instructor)
    {
        return this.db.query('SELECT id, type, contact, comment FROM swschool.contacts WHERE profileId = ?;', instructor.profileId);
    }

    /**
     * Gets a list of selected skills.
     * @param instructor
     * @returns {Promise<any>}
     */
    getSelectedSkills(instructor)
    {
        const skills = [];

        return this.db.query('SELECT s.id, s.name, s.color, s.created, s.comment FROM swschool.profile_skills ps left join swschool.profiles p on ps.profileId = p.id AND p.id = ? left join dicts.skills s on s.id = ps.id;', instructor.profileId)
            .then(rows => {
                rows.map(row => {
                    skills.push({
                        id: row.id,
                        name: row.name,
                        color: row.color,
                        created: row.created,
                        comment: row.comment
                    });
                });
                return skills;
            })
            .then(() => {return skills; })
            .catch(err => {throw (err);});
    }
}
module.exports = {IntructorsDao};

