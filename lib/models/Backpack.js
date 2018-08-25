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

module.exports = mongoose.model('Backpack', schema);