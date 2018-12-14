const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('../util/mongoose-helpers');
const { weighGear } = require('./aggregations');

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
    },
    getDetailById(id) {
        return this.findById(id)
            .populate({
                path: 'backpack',
                select: 'name weight'
            })
            .populate({
                path: 'gear',
                select: 'name weight'
            })
            .lean();
    },
    gearWeight(id) {
        return this.aggregate(weighGear(id))
            .then(results => results[0].weight);
    }
};

module.exports = mongoose.model('Backpack', schema);