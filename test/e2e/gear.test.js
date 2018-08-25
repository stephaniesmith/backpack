const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe.only('Gear E2E API', () => {

    before(() => dropCollection('gear'));

    let lonePeak = {
        name: 'Lone Peak 3.5',
        brand: 'Altra',
        type: 'footwear',
        weight: 8.7
    };

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
});