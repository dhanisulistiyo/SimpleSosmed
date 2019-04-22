const UserRepo = require('../repositories/users');
const UserTimelineRepo = require('../repositories/user_timeline');
const UserTransformer = require('../transformers/users');
const MessageTransformer = require('../transformers/error');

exports.createUser = async (payload) => {
    try {
        const users = await UserRepo.create(payload.body);
        return UserTransformer.user(users);
    } catch (error) {
        throw error;
    }
};

exports.deleteUser = async (id) => {
    try {
        const user = await UserRepo.findOne({
            id
        });
        if(!user) return MessageTransformer.message("User not found");

        await UserRepo.delete({id});
        return MessageTransformer.message("Delete user success");
    } catch (error) {
        throw error;
    }
};

exports.getAllUsers = async (payload) => {
    try {
        const users = await UserRepo.findAll(payload);
        return UserTransformer.users(users);
    } catch (error) {
        throw error;
    }
};

exports.getDetailUser = async (id) => {
    try {
        const user = await UserRepo.findOne({
            id
        });
        return UserTransformer.user(user);
    } catch (error) {
        throw error;
    }
};

exports.followUser = async (data) => {
    try {
        const {body, path} = data;
        const userId = path.id;
        const followingId = body.user_id;
        const uniqueKey = `${userId}${followingId}`;
        // Duplication check
        const checkDuplication = await UserTimelineRepo.findOne({
            uniqueKey
        });
        if (checkDuplication) {
            return MessageTransformer.message('You have followed this person');
        }
        // Create user follow
        await UserTimelineRepo.create({
            userId,
            followingId,
            uniqueKey
        });
        return MessageTransformer.message('Success following this person');
    } catch (error) {
        throw error;
    }
};

exports.unfollowUser = async (data) => {
    try {
        const {body, path} = data;
        const userId = path.id;
        const followingId = body.user_id;
        const uniqueKey = `${userId}${followingId}`;
        // Duplication check
        const checkDuplication = await UserTimelineRepo.findOne({
            uniqueKey
        });
        if (!checkDuplication) {
            return MessageTransformer.message('You have never followed this person');
        }

        // Delete Data
        await UserTimelineRepo.delete({
            uniqueKey
        });

        return MessageTransformer.message('Success unfollowing this person');
    } catch (error) {
        throw error;
    }
};

module.exports = exports;
