const {Database} = require('../database');
const {SkillsDao} = require('./skills-dao');

class RatesDao
{
    /**
     * Constructor.
     * @param connection [in] - A connection.
     */
    constructor(connection)
    {
        this.db = new Database(connection);
        this.skillsDao = new SkillsDao(connection);
    }

    /**
     * Gets a list of rates.
     * @returns {Promise<Array>}
     */
    getRates()
    {
        const items = [];
        const skills = [];
        //
        return this.skillsDao.getSkills()
            .then(rows => {
                rows.map(row => {
                    skills.push({
                        id: row.id,
                        name: row.name,
                        comment: row.comment
                    });
                });
                return this.db.query('SELECT r.id, r.name, r.rate, r.rateStudents, r.weekends, r.comment, s.id as skillId, s.name as skillName, s.color, s.created, s.comment as skillComment FROM dicts.rates r left join dicts.rate_skills rs on rs.rateId = r.id left join dicts.skills s on s.id = rs.skillId ORDER BY r.id;')
                    .then(rates => {
                        rates.map(row => {
                            items.push({
                                id: row.id,
                                name: row.name,
                                rate: row.rate,
                                students: row.rateStudents,
                                weekends: row.weekends,
                                comment: row.comment,
                                skills: skills,
                                skill: {
                                    id: row.skillId,
                                    name: row.skillName,
                                    color: row.color,
                                    created: row.created,
                                    comment: row.skillComment
                                }
                            });
                        });
                        return this.db.forward();
                    })
                    .then(() => {return items;})
                    .catch(err => {throw (err);});
            })
            .catch(err => {throw (err);});
    }

    /**
     * Updates a rate.
     * @param rate [in] - A rate.
     */
    updateRate(rate)
    {
        return this.db.query('UPDATE dicts.rates SET name = ?, rate = ?, rateStudents = ?, weekends = ?, comment = ? WHERE id = ?;', [rate.name, rate.rate, rate.students, rate.weekends, rate.comment, rate.id])
            .then(() => {
                return this.db.query('SELECT count(*) as count FROM dicts.rate_skills WHERE rateId = ?;', rate.id)
                    .then(row => {
                        if (row[0].count === 0)
                        {
                            return this.db.query('INSERT INTO dicts.rate_skills(skillId, rateId) VALUES(?, ?);', [rate.skill.id, rate.id])
                                .then(() => {return rate;})
                                .catch(err => {throw (err);});
                        }
                        else
                        {
                            return this.db.query('UPDATE dicts.rate_skills SET skillId = ? WHERE rateId = ?;', [rate.skill.id, rate.id])
                                .then(() => {return rate;})
                                .catch(err => {throw (err);});
                        }
                    })
                    .catch(err => {throw (err);});
            })
            .catch(err => {throw (err);});
    }

    /**
     * Creates a new rate.
     * @returns {Promise<any>}
     */
    createRate()
    {
        return new Promise((resolve, reject) => {
            const skills = [];
            this.skillsDao.getSkills().then(items => {
                items.map(item => {
                    skills.push({
                        id: item.id,
                        name: item.name,
                        color: item.color,
                        created: item.created,
                        comment: item.comment
                    });
                });
                const rate = {
                    id: -1,
                    name: '',
                    rate: 600,
                    students: 0,
                    weekends: false,
                    comment: '',
                    skills: skills,
                    skill: {
                        id: skills[0].id,
                        name: skills[0].name,
                        color: skills[0].color,
                        created: skills[0].created,
                        comment: skills[0].comment
                    }
                };
                resolve(rate);
            }).catch(err => {reject(err);});
        });
    }

    /**
     * Adds a new rate.
     * @param rate [in] - A rate.
     * @returns {Promise<any>}
     */
    addRate(rate)
    {
        return this.db.query('INSERT INTO dicts.rates(name, rate, rateStudents, weekends, comment) VALUES(?, ?, ?, ?, ?);', [rate.name, rate.rate, rate.students, rate.weekends, rate.comment])
            .then(() => {
                return this.db.getInsertedId()
                    .then(id => {rate.id = id; return this.db.forward();})
                    .then(() => {
                        return this.db.query('INSERT INTO dicts.rate_skills(rateId, skillId) VALUES(?, ?);', [rate.id, rate.skill.id])
                            .then(() => {
                                return this.db.getInsertedId().then(id => {return this.db.forward();}).catch(err => {throw (err);});
                            })
                            .then(() => {return rate;})
                            .catch(err => {throw (err);});
                    })
                    .then(() => {return rate;})
                    .catch(err => {throw (err);});
            })
            .then(() => {return rate;})
            .catch(err => {throw (err);});
    }

    /**
     * Removes a rate.
     * @param rate [in] - A rate.
     * @returns {Promise<any>}
     */
    deleteRate(rate)
    {
        return this.db.query('DELETE FROM dicts.rate_skills WHERE rateId = ?;', rate.id)
            .then(() => {
                return this.db.query('DELETE FROM dicts.rates WHERE id = ?;', rate.id)
                    .then(() => {return rate;})
                    .catch(err => {throw (err);});
            })
            .catch(err => {throw (err);});
    }
}
module.exports = {RatesDao};
