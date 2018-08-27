const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe.only('Gear E2E API', () => {

    before(() => dropCollection('backpacks'));
    before(() => dropCollection('gears'));

    let aura = {
        name: 'Aura 50',
        brand: 'Osprey',
        type: 'backpack',
        weight: 4.1
    };

    let kumo = {
        name: 'Kumo 36',
        brand: 'Gossamer Gear',
        type: 'backpack',
        weight: 18.5
    };

    let r1 = {
        name: 'R1',
        brand: 'Patagonia',
        type: 'clothes',
        weight: 9.87
    };

    let backpack = {
        name: 'Weekend Backpack Setup',
        backpack: '',
        gear: []
    };

    let lightWeight = {
        name: 'Light Weight Setup',
        backpack: '',
        gear: []
    };

    before(() => {
        return request.post('/api/gear')
            .send(aura)
            .then(({ body }) => {
                aura = body;
                backpack.backpack = aura._id;
                backpack.gear = [aura._id];
            });
    });

    before(() => {
        return request.post('/api/gear')
            .send(r1)
            .then(({ body }) => {
                r1 = body;
                backpack.gear.push(r1._id);
                lightWeight.gear.push(r1._id);
            });
    });

    before(() => {
        return request.post('/api/gear')
            .send(kumo)
            .then(({ body }) => {
                kumo = body;
                lightWeight.backpack = kumo._id;
            });
    });

    before(() => {
        return request.post('/api/backpacks')
            .send(lightWeight)
            .then(({ body }) => {
                lightWeight = body;
            });
    });

    it('posts a backpack', () => {
        return request.post('/api/backpacks')
            .send(backpack)
            .then(({ body }) => {
                const { _id, __v } = body;
                assert.ok(_id);
                assert.equal(__v, 0);
                assert.deepEqual(body, {
                    ...backpack,
                    _id,
                    __v
                });
                backpack = body;
            });
    });

    it('gets all backpacks', () => {
        return request.get('/api/backpacks')
            .then(({ body }) => {
                assert.deepEqual(body, [lightWeight, backpack]);
            });
    });


});