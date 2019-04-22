module.exports = (sequelize, Sequelize) => {
    const Timeline = sequelize.define('Timeline', {
          id: {
              type: Sequelize.INTEGER(11),
              autoIncrement: true,
              primaryKey: true,
              allowNull: false,
              unique: true,
          },
          userId: {
              type: Sequelize.INTEGER(11),
              field: 'user_id'
          },
          tweet: {
              type: Sequelize.STRING(140),
              field: 'tweet'
          },
          status: {
              type: Sequelize.INTEGER(1)
          }
      }, {
          freezeTableName: true,
          underscored: true,
          tableName: 'timeline'
      });

      return Timeline;
  };