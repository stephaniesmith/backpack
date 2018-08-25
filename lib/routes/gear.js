const router = require('express').Router();
const { respond, getParam } = require('./route-helpers');
const Gear = require('../models/Gear');

module.exports = router

    .post('/', respond(
        ({ body }) => Gear.create(body)
    ))

    .get('/', respond(
        ({ query }) => Gear.findByQuery(query)
    ));