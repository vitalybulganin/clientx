const {MySqlConnection} = require('./connection');
const {Database} = require('./database');
const {SkillsDao} = require('./dictionary/skills-dao');
const {RatesDao} = require('./dictionary/rates-dao');
const {getPrices, updatePrice, addPrice, deletePrice} = require('./dictionary/priceplans-dao');
const {ClientsDao} = require('./clients-dao');
const {getInstructors, updateInstructor, addInstructor, deleteInstructor} = require('./instructors-dao');

module.exports = {
    MySqlConnection, Database,
    SkillsDao,
    RatesDao,
    getPrices, updatePrice, addPrice, deletePrice,
    ClientsDao,
    getInstructors, updateInstructor, addInstructor, deleteInstructor
};
