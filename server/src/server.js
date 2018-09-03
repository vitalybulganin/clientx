const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const methodOverride = require('method-override');
const config = require('../../etc/config.json');
const {
    MySqlConnection,
    SkillsDao,
    RatesDao,
    getPrices, updatePrice, addPrice, deletePrice,
    ClientsDao,
    getInstructors, updateInstructor, addInstructor, deleteInstructor} = require('./dao');
// Initialization of express application
const app = express();
// Creating a connection.
const connection = new MySqlConnection(config.db);
// Opening a new connection to database.
connection.connect(err => {
    console.log(err);
});
// Creating clients dao.
const clients = new ClientsDao(connection);
// Creating skills dao.
const skills = new SkillsDao(connection);
// Creating skills dao.
const rates = new RatesDao(connection);
// Handling error events.
connection.on(err => {
    console.log(err);
    // Reopening a new connection.
    connection.connect();
});
// Using bodyParser middleware
app.use(bodyParser.json());
//
app.use(methodOverride());
// Allow requests from any origin
app.use(cors({origin: '*'}));

app.use(express.static('public'));
// ------------------------------------------------------------------------------------------------------------------ //
// RESTful api handlers, RATE
// ------------------------------------------------------------------------------------------------------------------ //
app.get('/api/rates', (req, res) => {
    console.log('get rates.');
    rates.getRates().then(rows => res.type('application/json').send(JSON.stringify(rows))).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/updaterate', (req, res) => {
    console.log('update rate.');
    // Getting a list of rows.
    rates.updateRate(req.body.rate).then(rate => {res.type('application/json').send(rate);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/addrate', (req, res) => {
    console.log('add rate.');
    // Getting a list of rows.
    rates.addRate(req.body.rate).then(rate => {res.type('application/json').send(rate);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/deleterate', (req, res) => {
    console.log('delete rate.');
    // Getting a list of rows.
    rates.deleteRate(req.body.rate).then(rate => {res.type('application/json').send(rate);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/openrate', (req, res) => {
    console.log('create rate.');
    // Getting a list of rows.
    rates.createRate().then(rate => {res.send(rate);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
// ------------------------------------------------------------------------------------------------------------------ //
// RESTful api handlers, SKILL
// ------------------------------------------------------------------------------------------------------------------ //
app.get('/api/skills', (req, res) => {
    console.log('get skills.');
   // Getting a list of rows.
    skills.getSkills().then(rows => {res.type('application/json').send(rows);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/updateskill', (req, res) => {
    console.log('update skill.');
    // Getting a list of rows.
    skills.updateSkill(req.body.skill).then(skill => {res.type('application/json').send(skill);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/addskill', (req, res) => {
    console.log('add skill.');
    // Getting a list of rows.
    skills.addSkill(req.body.skill).then(skill => {res.type('application/json').send(skill);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/deleteskill', (req, res) => {
    console.log('delete skill.');
    // Getting a list of rows.
    skills.deleteSkill(req.body.skill).then(skill => {res.type('application/json').send(skill);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
// ------------------------------------------------------------------------------------------------------------------ //
// RESTful api handlers, PRICEPLAN
// ------------------------------------------------------------------------------------------------------------------ //
app.get('/api/priceplans', (req, res) => {
    getPrices().then(rows => res.type('application/json').send(rows)).catch(err => res.type('application/json').send(err));
});
app.post('/api/updateprice', (req, res) => {
    // Getting a list of rows.
    updatePrice(req.body.price).then(price => {res.type('application/json').send(price);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/addprice', (req, res) => {
    console.log('add: ' + req.body);
    // Getting a list of rows.
    addPrice(req.body.price).then(price => {res.type('application/json').send(price);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/deleteprice', (req, res) => {
    console.log('delete: ' + req.body);
    // Getting a list of rows.
    deletePrice(req.body.price).then(price => {res.type('application/json').send(price);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
// ------------------------------------------------------------------------------------------------------------------ //
// RESTful api handlers, Instructors
// ------------------------------------------------------------------------------------------------------------------ //
app.get('/api/instructors', (req, res) => {
    getInstructors().then(rows => res.type('application/json').send(rows)).catch(err => res.type('application/json').send(err));
});
app.post('/api/updateinstructor', (req, res) => {
    // Getting a list of rows.
    updateInstructor(req.body.instructor).then(instructor => {res.type('application/json').send(instructor);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/addinstructor', (req, res) => {
    console.log('add: ' + req.body);
    // Getting a list of rows.
    addInstructor(req.body.instructor).then(instructor => {res.type('application/json').send(instructor);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/deleteinstructor', (req, res) => {
    console.log('delete: ' + req.body);
    // Getting a list of rows.
    deleteInstructor(req.body.instructor).then(instructor => {res.type('application/json').send(instructor);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
// ------------------------------------------------------------------------------------------------------------------ //
// RESTful api handlers, Clients
// ------------------------------------------------------------------------------------------------------------------ //
app.get('/api/clients', (req, res) => {
    clients.getClients().then(rows => {res.type('application/json').send(rows);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/updateclient', (req, res) => {
    console.log('update: ' + req.body);
    // Getting a list of rows.
    clients.updateClient(req.body.client).then(client => {res.type('application/json').send(client);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/addclient', (req, res) => {
    console.log(req.body);
    // Getting a list of rows.
    clients.addClient(req.body.client).then(client => {res.type('application/json').send(client);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
app.post('/api/deleteclient', (req, res) => {
    console.log('delete: ' + req.body);
    // Getting a list of rows.
    clients.deleteClient(req.body.client).then(client => {res.type('application/json').send(client);}).catch(err => {console.log(err); res.type('application/json').send(err);});
});
// ------------------------------------------------------------------------------------------------------------------ //
app.get('/*', function(req, res) {
    res.sendFile(path.resolve('public/', 'index.html'));
});

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
console.log('http://localhost:' + config.serverPort);
