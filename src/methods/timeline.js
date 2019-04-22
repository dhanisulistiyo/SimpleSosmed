
const TimelineRepo = require('../repositories/timeline.js');
const UserTimelineRepo = require('../repositories/user_timeline');
// Transformer
const TimelineTransformer = require('../transformers/timeline');
const MessageTransformer = require('../transformers/error');

exports.getTimeline = async (data) => {
    try {
        const {path} = data;
        const userId = path.id;
        let relations = await UserTimelineRepo.findAllFollowing({
            userId
        });
        relations = relations.map(relation => relation.followingId);

        const timelines = await TimelineRepo.findTimeline({
            userId: relations
        });

        return TimelineTransformer.timelines(timelines);
    } catch (error) {
        throw error;
    }
};

exports.postTimeline = async (data) => {
    try {
        // Get requirement variable
        const tweet = data.body.tweet;

        // Validate length of tweet
        if (tweet.length > 140) {
            return MessageTransformer.message('You can tweet more than 140 characters');
        }

        // Prepare requirement variables
        const payload = {
            userId: data.path.id,
            tweet: data.body.tweet
        };

        // Insert data
        await TimelineRepo.create(payload);

        return MessageTransformer.message('Success posting tweet');
    } catch (error) {
        throw error;
    }
};

exports.deleteTimeline = async (conditions) => {
    try {       
        let res = TimelineRepo.findOne(conditions);
        if(!res) return MessageTransformer.message('Tweet not found');

        await TimelineRepo.delete(conditions);
        return MessageTransformer.message('Success delete tweet');
    } catch (error) {
        throw error;
    }
};

module.exports = exports;
