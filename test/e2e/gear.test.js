const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe.only('Gear E2E API', () => {

    before(() => dropCollection('gears'));

    let r1 = {
        name: 'R1',
        brand: 'Patagonia',
        type: 'clothes',
        weight: 9.87
    };

    let lonePeak = {
        name: 'Lone Peak 3.0',
        brand: 'Altra',
        type: 'footwear',
        weight: 8.7
    };

    before(() => {
        return request.post('/api/gear')
            .send(r1)
            .then(({ body }) => {
                r1 = body;
            });
    });

    it('posts gear', () => {
        return request.post('/api/gear')
            .send(lonePeak)
            .then(({ body }) => {
                const { _id, __v } = body;
                assert.ok(_id);
                assert.equal(__v, 0);
                assert.deepEqual(body, {
                    ...lonePeak,
                    _id,
                    __v
                });
                lonePeak = body;
            });
    });

    it('gets all gear', () => {
        return request.get('/api/gear')
            .then(({ body }) => {
                assert.deepEqual(body, [r1, lonePeak]);
            });
    });

    it('gets a piece of gear by id', () => {
        return request.get(`/api/gear/${r1._id}`)
            .then(({ body }) => {
                assert.deepEqual(body, r1);
            });
    });

    it('updates a piece of gear by id', () => {
        lonePeak.name = 'Lone Peak 3.5';
        
        return request.put(`/api/gear/${lonePeak._id}`)
            .send(lonePeak)
            .then(({ body }) => {
                assert.deepEqual(body, lonePeak);
            });
    });

    it('deletes a piece of gear by id', () => {
        return request.delete(`/api/gear/${lonePeak._id}`)
            .then(() => {
                return request.get(`/api/gear/${lonePeak._id}`);
            })
            .then(res => {
                assert.strictEqual(res.status, 404);
            });
    });

});