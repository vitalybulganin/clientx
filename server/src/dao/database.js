// Connecting to database.
const mysql = require('mysql');

// Creating a new connection.
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Real2981'
});
// Opening a new connection to database.
function openConnection(callback)
{
    connection.connect(callback);
};
module.exports = {connection, openConnection};
