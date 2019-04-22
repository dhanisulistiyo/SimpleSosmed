const {Users} = require('../models/index');
const Helper = require('../utils/helper');

exports.create = async (payload) => {
    try {
        const result = await Users.create(payload);
        return Helper.parseResult(result);
    } catch (err) {
        throw err;
    }
};

exports.delete = async (conditions) => {
    try {
        const result = await Users.destroy({
            where: conditions
        });
        return Helper.parseResult(result);
    } catch (err) {
        throw err;
    }
};

exports.findOne = async (conditions) => {
    try {
        const result = await Users.findOne({
            where: conditions
        });

        return Helper.parseResult(result);
    } catch (err) {
        throw err;
    }
};

exports.findAll = async (wheres = {}) => {
    try {
        
        const result = await Users.findAll({
            where: wheres
        });

        return Helper.parseResult(result);
    } catch (err) {
        throw err;
    }
};

module.exports = exports;