const router = require('express').Router();
const { respond, getParam } = require('./route-helpers');
const Gear = require('../models/Gear');

module.exports = router

    .param('id', getParam)

    .post('/', respond(
        ({ body }) => Gear.create(body)
    ))

    .get('/', respond(
        ({ query }) => Gear.findByQuery(query)
    ))

    .get('/:id', respond(
        ({ id }) => Gear.getDetailById(id)
    ));