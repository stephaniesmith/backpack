const { assert } = require('chai');
const { Types } = require('mongoose');
const { getErrors } = require('./helpers');
const Gear = require('../../lib/models/Gear');

describe('Gear model', () => {

    it('valid good model', () => {
        const data = {
            name: 'Lone Peak 3.5',
            brand: 'Altra',
            type: 'footwear',
            weight: 8.7
        };

        const gear = new Gear(data);
        data._id = gear._id;
        assert.deepEqual(gear.toJSON(), data);
        assert.isUndefined(gear.validateSync());
    });

    it('Gear required fields', () => {
        const gear = new Gear({ });
        const errors = getErrors(gear.validateSync(), 3);

        assert.equal(errors.name.kind, 'required');
        assert.equal(errors.type.kind, 'required');
        assert.equal(errors.weight.kind, 'required');
    });

});