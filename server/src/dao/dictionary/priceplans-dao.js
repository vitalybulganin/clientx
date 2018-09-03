// Connecting to database.
const {Database} = require('../database');

class PriceplansDao
{
    /**
     * Constructor.
     * @param connection [in] - A connection.
     */
    constructor(connection)
    {
        this.db = new Database(connection);
    }

    /**
     * Gets a list of priceplans.
     * @returns {Promise<Array>}
     */
    getPrices()
    {
        const prices = [];

        return this.db.query('SELECT id, name, DATE_FORMAT(begin, "%Y-%m-%d") AS begin, DATE_FORMAT(end, "%Y-%m-%d") AS end, lessons, duration, standard_hour, created, comment, enabled FROM dicts.priceplans ORDER BY id;')
            .then(rows => {
                rows.map(price => {
                    prices.push({
                        id: price.id,
                        name: price.name,
                        begin: price.begin,
                        end: price.end,
                        checked: (price.enabled === 1) ? true : false,
                        count: price.lessons,
                        duration: price.duration,
                        rate: price.standard_hour,
                        comment: price.comment
                    });
                });
                return prices;
            })
            .catch(err => {throw (err);});
    }

    /**
     * Updates price plan.
     * @param price [in] - A price plan.
     * @returns {Promise<any>}
     */
    updatePrice(price)
    {
        return this.db.query('UPDATE dicts.priceplans SET name = ?, begin = ?, end = ?, enabled = ?, lessons = ?, duration = ?, standard_hour = ?, comment = ? WHERE id = ?;',
            [price.name, price.begin, price.end, price.checked, price.count, price.duration, price.rate, price.comment, price.id])
            .then(() => {return price;})
            .catch(err => {throw (err);});
    }

    /**
     * Adds a new price plan.
     * @param price [in] - A new price plan.
     * @returns {Promise<any>}
     */
    addPrice(price)
    {
        return this.db.query('INSERT INTO dicts.priceplans(name, begin, end, lessons, duration, standard_hour, created, comment, enabled) VALUES(?, ?, ?, ?, ?, ?, now(), ?, ?);',
            [price.name, price.begin, price.end, price.count, price.duration, price.rate, price.comment, (price.checked === true ? 1 : 0)])
            .then(() => {
                this.db.getInsertedId()
                    .then(id => {
                        price.id = id;
                        return this.db.forward();
                    })
                    .catch(err => {throw (err);});
                return this.db.forward();
            })
            .then(() => {return price;})
            .catch(err => {throw (err);});
    }

    /**
     * Removes a price plan.
     * @param price [in] - A price plan.
     * @returns {Promise<any>}
     */
    deletePrice(price)
    {
        return this.db.query('DELETE FROM dicts.priceplans WHERE id = ?;', price.id)
            .then(() => {return price;})
            .catch(err => {throw (err);});
    }
}
module.exports = {PriceplansDao};

