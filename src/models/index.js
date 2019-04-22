var Sequelize = require('sequelize');
var config = require('../../configs/drivers');

var dbContext = new Sequelize(config.context.database, config.context.username, config.context.password, {
  host: config.context.host,
  dialect: config.context.dialect,
  pool: {
    max: config.context.max,
    min: config.context.min,
    idle: config.context.idle
  }
});
 
const db = {};
db.Sequelize = Sequelize;
db.dbContext = dbContext;
//Models
db.Users = require('./users')(dbContext, Sequelize);
db.Timeline = require('./timeline')(dbContext, Sequelize);
db.UserTimeline = require('./user_timeline')(dbContext, Sequelize);

//Relations
db.Timeline.belongsTo(db.Users, { foreignKey: 'user_id', targetKey: 'id' });
db.Users.hasMany(db.Timeline, { foreignKey: 'user_id', targetKey: 'id' });
db.Users.hasMany(db.UserTimeline, { foreignKey: 'user_id', targetKey: 'id' });
db.Users.hasMany(db.UserTimeline, { foreignKey: 'following_id', targetKey: 'id' });
db.UserTimeline.belongsTo(db.Users, { foreignKey: 'user_id', targetKey: 'id' });
db.UserTimeline.belongsTo(db.Users, { foreignKey: 'following_id', targetKey: 'id' });
// ----

module.exports = db;
