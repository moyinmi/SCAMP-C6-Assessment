const express = require('express');
const router = express.Router();
const db = require('../config/db');
const User = require('../model/User');
const Client = require('../model/Client');
const Sequelize = require('sequelize');
const auth = require('../middleware/auth')
const Op = Sequelize.Op;

// Get user list
router.get('/', auth, (req, res) => 
  User.findAll({ include: Client })
    .then(users => res.send({'users': users}))
    .catch(err => res.status(400).send('error', {error: err})));



module.exports = router;
