const Sequelize = require('sequelize');
const logger = require('../helper/logging');
const configDB = require('../helper/db');

const sequelize = new Sequelize(configDB.DB, configDB.USER, configDB.PASSWORD, {
    host: configDB.HOST,
    dialect: configDB.DIALECT,
});

sequelize.authenticate()
    .then(() => {
        logger.info('DB Connected...');
    })
    .catch(err => {
        logger.info('Error', err);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userModel = require('./userModel')(sequelize, Sequelize);
db.addressBookModel = require('./addressBookModel')(sequelize, Sequelize);

db.sequelize.sync()
    .then(() => {
        logger.info('Yes re-sync');
    }).catch((err) => {
        logger.info('re-sync fail');
    });

module.exports = db;
