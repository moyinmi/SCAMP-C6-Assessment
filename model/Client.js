const Sequelize = require('sequelize');
const db = require('../config/db');

const Client = db.define('client', {
  uuid: {
    type: Sequelize.UUID
  },
  name: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  phone_number: {
    type: Sequelize.INTEGER
  },
  company_reg_number:{
    type: Sequelize.INTEGER
  }
});

Client.sync().then(() => {
  console.log('table created');
});
module.exports = Client;