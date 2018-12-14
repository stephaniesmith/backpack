const { ObjectId } = require('mongoose').Types;

const weighGear = id => {
    return [
        unwindGear(),
        lookup(),
        unwindGear(),
        sumGearWeight(),
        matchBackpack(id)
    ];
};

const unwindGear = () => {
    return { $unwind: '$gear' };
};

const lookup = () => {
    return {
        $lookup: {
            from: 'gears',
            localField: 'gear',
            foreignField: '_id',
            as: 'gear'
        }
    };
};

const sumGearWeight = () => {
    return { 
        $group: {
            _id: '$_id',
            weight: { '$sum': '$gear.weight' }
        }
    };
};

const matchBackpack = id => {
    return { $match: { _id: ObjectId(id) } };
};

module.exports = {
    weighGear
};
