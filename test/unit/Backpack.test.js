const { assert } = require('chai');
const { Types } = require('mongoose');
const { getErrors } = require('./helpers');
const Backpack = require('../../lib/models/Backpack');

describe('Gear model', () => {

    it('valid good model', () => {
        const data = {
            name: 'Weekend Pack Setup',
            backpack: Types.ObjectId(),
            gear: [Types.ObjectId()]
        };

        const backpack = new Backpack(data);
        data._id = backpack._id;
        assert.deepEqual(backpack.toJSON(), data);
        assert.isUndefined(backpack.validateSync());
    });

    it('backpack required fields', () => {
        const backpack = new Backpack({ });
        const errors = getErrors(backpack.validateSync(), 2);

        assert.equal(errors.name.kind, 'required');
        assert.equal(errors.backpack.kind, 'required');
    });

});