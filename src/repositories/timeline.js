const {Timeline, Users} = require('../models/index.js');
const Helper = require('../utils/helper.js');

exports.create = async (payload) => {
    try {
        const result = await Timeline.create(payload);

        return Helper.parseResult(result);
    } catch (err) {
        throw err.message;
    }
};

exports.findOne = async (conditions) => {
    try {
        const result = await Timeline.findOne({
            where: conditions
        });

        return Helper.parseResult(result);
    } catch (err) {
        throw err;
    }
};

exports.findAll = async (conditions) => {
    try {
        const result = await Timeline.findAll({
            where: conditions
        });

        return Helper.parseResult(result);
    } catch (err) {
        throw err;
    }
};

exports.findTimeline = async (conditions, offset, limit) => {
    try {
        const result = await Timeline.findAll({
            where: conditions,
            include: [{
                model: Users,
                required: true
            }],
            order: [['created_at', 'DESC']]
        });

        return Helper.parseResult(result);
    } catch (err) {
        throw err;
    }
};

exports.delete = async (conditions) => {
    try {
        const result = await Timeline.destroy({
            where: conditions
        });

        return Helper.parseResult(result);
    } catch (err) {
        throw err.message;
    }
};

module.exports = exports;