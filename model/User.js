const Sequelize = require('sequelize');
const db = require('../config/db');
const Client = require('./Client');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

User.sync().then(() => {
  console.log('table created');
});
User.hasMany(Client);
Client.belongsTo(User);
module.exports = User;