// Connecting to database.
const mysql = require('mysql');

class MySqlConnection {
    /**
     * Constructor.
     * @param config [in] - A config connection.
     */
    constructor(config)
    {
        // Creating a new connection.
        this.connection = mysql.createConnection(config);
    }

    /**
     * Connects to database.
     * @param config
     */
    connect(onEvent)
    {
        // Opening the connection.
        this.connection.connect(err => {
            if (err) { onEvent(err); }
        });
    }

    /**
     * Closes the connection.
     */
    close()
    {
        this.connection.end();
    }

    /**
     *
     * @param onError
     */
    on(onError)
    {
        this.connection.on('error', err => {
            if (err) { onError(err); }
        });
    };

    /**
     * Gets the connection.
     * @returns {Connection|*}
     */
    getConnection() {
        return this.connection;
    };
}
module.exports = {MySqlConnection};
