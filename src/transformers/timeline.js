
const timeline = (timeline) => {
    return {
        id: timeline.id,
        name: `${timeline.User.firstname} ${timeline.User.lastname}`,
        tweet: timeline.tweet,
        description: timeline.User.description,
        created_at: timeline.createdAt
    }
};

const timelines = (timelines) => {
    return timelines.map(tmln => timeline(tmln));
}

module.exports = {
    timeline,
    timelines
};