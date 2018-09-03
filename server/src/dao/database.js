
class Database
{
    constructor(connection)
    {
        this.connection = connection.getConnection();
    }

    /**
     * Executing s SQL query.
     * @param sql [in] - SQL statement.
     * @param args [in] - A list of parameters.
     * @returns {Promise<any>}
     */
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) { return reject(err); }
                // if (rows.length === 0) { console.log('[ERROR] No data found.'); return reject('No data found.'); }

                return resolve(rows);
            });
        });
    }

    /**
     * Gets last inserted id.
     * @returns {Promise<any>}
     */
    getInsertedId() {
        return new Promise((resolve, reject) => {
            this.query('SELECT last_insert_id() as insertId;')
                .then(rows => {
                    return resolve(rows[0].insertId);
                })
                .catch(err => {return reject(err);});
        });
    }

    /**
     * Closes the connection.
     * @returns {Promise<any>}
     */
    close() {
        return new Promise((resolve, reject) => {
            console.log('Closing the connection.');
            this.connection.end(err => {
                if (err) { return reject(err); }

                return resolve();
            });
        });
    }

    /**
     *
     * @returns {Promise<any>}
     */
    forward() {
        return new Promise((resolve, reject) => {
            this.query('SELECT last_insert_id() as insertId;')
                .then(rows => {
                    return resolve();
                })
                .catch(err => {return reject(err);});
        });
    }
}
module.exports = {Database};
