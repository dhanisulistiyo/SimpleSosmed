
const user = (user) => {
    return {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        description: user.description,
        status: user.status
    }
};

const users = (users) => {
    return users.map(usr => user(usr));
}

module.exports = {
    user,
    users
};