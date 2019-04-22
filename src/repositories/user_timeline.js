const {UserTimeline} = require('../models/index.js');
const Helper = require('../utils/helper.js');

exports.create = async (payload) => {
    try {
        const result = await UserTimeline.create(payload);

        return Helper.parseResult(result);
    } catch (err) {
        throw err.message;
    }
};

exports.findOne = async (conditions) => {
    try {
        const result = await UserTimeline.findOne({
            where: conditions
        });

        return Helper.parseResult(result);
    } catch (err) {
        throw err;
    }
};

exports.findAll = async (conditions) => {
    try {
        const result = await UserTimeline.findAll({
            where: conditions
        });

        return Helper.parseResult(result);
    } catch (err) {
        throw err;
    }
};

exports.findAllFollowing = async (conditions) => {
    try {
        const result = await UserTimeline.findAll({
            attributes: ['followingId'],
            where: conditions
        });

        return Helper.parseResult(result);
    } catch (err) {
        throw err;
    }
};

exports.delete = async (conditions) => {
    try {
        const result = await UserTimeline.destroy({
            where: conditions
        });

        return Helper.parseResult(result);
    } catch (err) {
        throw err.message;
    }
};

module.exports = exports;