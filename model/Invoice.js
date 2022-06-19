const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../config/db');

const Invoice = db.define('invoice', {
  uuid: {
    type: Sequelize.UUID
  },
  name: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.STRING
  },
  client_id: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.INTEGER
  },
  created_at:{
    type: Sequelize.INTEGER
  },
  due_date: {
    type: sequelize.INTEGER
  }
});

Invoice.sync().then(() => {
  console.log('table created');
});
module.exports = Invoice;