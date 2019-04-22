module.exports = (sequelize, Sequelize) => {
    const Relations = sequelize.define('UserTimeline', {
            id: {
                type: Sequelize.INTEGER(11),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            userId: {
                type: Sequelize.INTEGER(11),
                field: 'user_id',
                allowNull: false,
            },
            followingId: {
                type: Sequelize.INTEGER(11),
                field: 'following_id',
                allowNull: false
            },
            uniqueKey: {
                type: Sequelize.INTEGER(11),
                field: 'unique_key',
                allowNull: false,
                unique: true
            }
        }, {
            freezeTableName: true,
            underscored: true,
            tableName: 'user_timeline'
    });
    
    return Relations;
};