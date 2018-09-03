// Connecting to database.
const connection = require('./database').connection;

/**
 * Gets a list of rates.
 */
function getInstructors()
{
    return new Promise(function(resolve, reject) {
        const items = [];

        connection.query('SELECT id, name, DATE_FORMAT(begin, "%Y-%m-%d") AS begin, DATE_FORMAT(end, "%Y-%m-%d") AS end, lessons, duration, standard_hour, created, enabled FROM dicts.priceplans ORDER BY id;', function(err, rows, fields) {
            if (err) { console.log(err); reject(err); }
            // console.log(fields);
            rows.map(price => {
                items.push({
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
            console.log(items);
            resolve(items);
        });
    });
}

/**
 * Updates a selected skill.
 */
function updateInstructor(instructor)
{
    return new Promise(function(resolve, reject) {
        if (typeof price.comment === 'undefined') { price.comment = null; }

        connection.query('UPDATE dicts.priceplans SET name = "' + price.name + '", begin = "' + price.begin + '", end = ' + ((typeof price.end !== 'undefined' && price.checked !== true) ? '"' + price.end + '"' : 'null') + ', enabled = ' + price.checked + ', lessons = ' + price.count + ', duration = ' + price.duration + ', standard_hour = ' + price.rate + ', comment = ' + (typeof price.comment !== 'undefined' ? '"' + price.comment + '"' : 'null') + ' WHERE id = ' + price.id + ';', function(err, rows, fields) {
            if (err) { console.log(err); reject(err); }
            //
            resolve(instructor);
        });
    });
}

/**
 * Adds a new price.
 */
function addInstructor(instructor)
{
    console.log(instructor);

    return new Promise(function(resolve, reject) {
        connection.query('INSERT INTO dicts.priceplans(name, begin, end, lessons, duration, standard_hour, created, comment, enabled) VALUES (\'' + price.name + '\', \'' +
            price.begin + '\', ' +
            price.end + ', \'' +
            price.count + '\', \'' +
            price.duration + '\', \'' +
            price.rate + '\', now(), \'' +
            price.comment + '\', \'' +
            (price.checked === true ? 1 : 0) + '\');', function(err, rows, fields) {
            if (err) { console.log(err); reject(err); }
            connection.query('SELECT id FROM dicts.priceplans WHERE name = \'' + price.name + '\' AND DATE_FORMAT(begin, "%Y-%m-%d") = \'' + price.begin + '\';', function(err2, rows2, fields2) {
                if (err2) { console.log(err2); reject(err2); }

                rows2.map((row) => {instructor.id = row.id;});

                resolve(instructor);
            });
        });
    });
}

/**
 * Deletes a selected skill.
 */
function deleteInstructor(instructor)
{
    return new Promise(function(resolve, reject) {
        connection.query('DELETE FROM dicts.priceplans WHERE id = \'' + instructor.id + '\';', function(err, rows, fields) {
            if (err) { console.log(err); reject(err); }

            resolve(instructor);
        });
    });
}

module.exports = {getInstructors, updateInstructor, addInstructor, deleteInstructor};

