const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('../util/mongoose-helpers');

const schema = new Schema({
    name: RequiredString,
    backpack: {
        type: Schema.Types.ObjectId,
        ref: 'Gear',
        required: true
    },
    gear: [{
        type: Schema.Types.ObjectId,
        ref: 'Gear'
    }]

});

schema.statics = {
    findByQuery(query) {
        return this.find(query)
            .populate({
                path: 'backpack',
                select: 'name weight'
            })
            .populate({
                path: 'gear',
                select: 'name weight'
            })
            .lean();
    }
};

module.exports = mongoose.model('Backpack', schema);