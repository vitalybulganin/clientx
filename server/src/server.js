/*
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {serverPort} from "etc/config.json";
*/

// import {connection} from "dao";
// import {openConnection, getRates as rates} from "dao";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const {openConnection, getSkills, updateSkill, addSkill, deleteSkill} = require('./dao');
const config = require('../../etc/config.json');
// Initialization of express application
const app = express();
// Opening a new connection to database.
openConnection();
// Using bodyParser middleware
app.use(bodyParser.json());
// Allow requests from any origin
app.use(cors({origin: '*'}));

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('public/', 'index.html'));
});

// RESTful api handlers
app.get('/rates', (req, res) => {
    rates.getRates().then(data => res.send(data));
});

// RESTful api handlers
app.get('/skills', (req, res) => {
    // Getting a list of rows.
    getSkills().then(rows => {res.send(rows);}).catch(err => res.send(err));
});
app.post('/updateskill', (req, res) => {
    // Getting a list of rows.
    updateSkill(req.body.skill).then(skill => {res.send(skill);}).catch(err => res.send(err));
});
app.post('/addskill', (req, res) => {
    console.log(req.body);
    // Getting a list of rows.
    addSkill(req.body.skill).then(skill => {res.send(skill);}).catch(err => res.send(err));
});
app.post('/deleteskill', (req, res) => {
    console.log(req.body);
    // Getting a list of rows.
    deleteSkill(req.body.skill).then(skill => {res.send(skill);}).catch(err => res.send(err));
});
/*
app.get('/addskills', (req, res) => {
    skills.addSkill(req.body).then(data => res.send(data));
});
*/
app.use(function(req, res, next) {
    res.status(404).send('404 — Страница не найдена!');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('500 — Что-то не так!');
});
const server = app.listen(config.serverPort, function() {
    console.log(`Server is up and running on port ${config.serverPort}`);
});

/*
db.connection.end(function(err) {
    if (err) { return console.log(err); }

    console.log("Disconnect.");
});
*/
console.log('http://localhost:' + config.serverPort + '/public/');
