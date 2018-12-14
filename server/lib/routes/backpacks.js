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
        ({ id }) => {
            return Backpack.getDetailById(id)
                .then(backpack => [backpack, Backpack.gearWeight(id)])
                .then(([backpack, weight]) => {
                    backpack.weight = weight;
                    return backpack;
                });
        }
    ));