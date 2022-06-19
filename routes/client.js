const express = require('express');
const router = express.Router();
const db = require('../config/db');
const User = require('../model/User');
const Client = require('../model/Client');
const Sequelize = require('sequelize');
const auth = require('../middleware/auth');
const Op = Sequelize.Op;

//l
router.post('/', auth, (req, res) => 
  Client.create({
    uuid: Sequelize.UUIDV4, 
    name: req.name,
    email: req.email,
    phone_number: req.phone_number,
    company_reg_number: req.company_reg_number,
    user: req.user})
    .then(client => res.send({'client': client}))
    .catch(err => res.status(400).send({'error': err})));



module.exports = router;