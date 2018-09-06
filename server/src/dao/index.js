const {MySqlConnection} = require('./connection');
const {Database} = require('./database');
const {SkillsDao} = require('./dictionary/skills-dao');
const {RatesDao} = require('./dictionary/rates-dao');
const {PriceplansDao} = require('./dictionary/priceplans-dao');
const {ClientsDao} = require('./clients-dao');
const {IntructorsDao} = require('./instructors-dao');

module.exports = {
    MySqlConnection, Database,
    SkillsDao,
    RatesDao,
    PriceplansDao,
    ClientsDao,
    IntructorsDao
};
