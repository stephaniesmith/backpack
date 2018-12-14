const router = require('express').Router();
const { respond, getParam } = require('./route-helpers');
const Backpack = require('../models/Backpack');

module.exports = router

    .param('id', getParam)

    .post('/', respond(
        ({ body }) => Backpack.create(body)
    ))

    .get('/', respond(
        ({ query }) => Backpack.findByQuery(query)
    ))

    .get('/:id', respond(
        ({ id }) => Promise.all([Backpack.getDetailById(id), Backpack.gearWeight(id)])
            .then(([load, weight]) => {
                load.weight = Math.ceil((weight + load.backpack.weight) * 100) / 100;
                return load;
            })
    ));