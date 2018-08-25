const router = require('express').Router();
const { respond, getParam } = require('./route-helpers');
const Gear = require('../models/Gear');

module.exports = router