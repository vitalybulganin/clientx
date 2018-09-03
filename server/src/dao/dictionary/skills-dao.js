// Connecting to database.
const {Database} = require('../database');

class SkillsDao
{
    /**
     * Constructor.
     * @param connection
     */
    constructor(connection)
    {
        this.db = new Database(connection);
    }

    /**
     * Gets a list of skills.
     * @returns {Promise<any>}
     */
    getSkills()
    {
        const items = [];

        return this.db.query('SELECT id, name, color, created, comment FROM dicts.skills ORDER BY id;')
            .then(skills => {
                // console.log(fields);
                skills.map(skill => {
                    items.push({
                        id: skill.id,
                        name: skill.name,
                        color: skill.color,
                        created: skill.created,
                        comment: skill.comment
                    });
                });
                return this.db.forward();
            })
            .then(() => {return items;})
            .catch(err => {throw (err);});
    }

    /**
     * Updates a skill.
     * @param skill [in] - A skill.
     * @returns {Promise<any>}
     */
    updateSkill(skill)
    {
        return this.db.query('UPDATE dicts.skills SET name = ?, comment = ?, created = now() WHERE id = ?;', [skill.name, skill.comment, skill.id])
            .then(() => {return skill;})
            .catch(err => {throw (err);});
    }

    /**
     * Adds a new skill.
     * @param skill [in] - A new skill.
     * @returns {Promise<any>}
     */
    addSkill(skill)
    {
        return this.db.query('INSERT INTO dicts.skills(name, comment, created) VALUES(?, ?, now());', [skill.name, skill.comment])
            .then(() => {return this.db.getInsertedId()
                .then(id => {
                    skill.id = id;
                    return skill;
                })
                .catch(err => {throw (err);});})
            .catch(err => {throw (err);});
    }

    /**
     * Removes a skill.
     * @param skill [in] - A skill.
     * @returns {Promise<any>}
     */
    deleteSkill(skill)
    {
        return this.db.query('DELETE FROM dicts.skills WHERE id = ?', skill.id)
            .then(() => {return skill;})
            .catch(err => {throw (err);});
    }
}
module.exports = {SkillsDao};

