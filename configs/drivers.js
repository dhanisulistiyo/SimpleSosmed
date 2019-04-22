var dotenv = require('dotenv');

dotenv.config();

module.exports = {
    context: {
        database: process.env.DATABASE,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        max: parseInt(process.env.MAX, 10),
        min: parseInt(process.env.MIN, 10),
        acquire: parseInt(process.env.ACQUIRE, 10),
        idle: parseInt(process.env.IDLE, 10)
    },
    port: process.env.PORT
};


