const express = require("express");
const path = require("path");
const port = process.env.PORT || 8091 || 8092;
const app = express();
// Connecting to database.
const mysql = require("mysql");
// Creating a new connection.
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Real2981"});
// Connecting to server.
connection.connect();

app.use(express.static(__dirname + '/public/'));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname + "/public/", "index.html"));
});

app.use(function(req, res, next) {
    res.status(404).send("404 — Страница не найдена!")
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("500 — Что-то не так!");
});

app.listen(port);

console.log("Disconnecting from the server.");
connection.end(function(err) {
    if (err) { return console.log(err); }

    console.log("Disconnect.");
});
console.log("http://localhost:" + port + "/public");
