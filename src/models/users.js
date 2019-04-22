module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define('Users', {
        id: {
            type: Sequelize.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        firstname: {
            type: Sequelize.STRING(255),
            field: 'firstname'
        },
        lastname: {
            type: Sequelize.STRING(255),
            field: 'lastname'
        },
        description: {
            type: Sequelize.STRING(500),
            field: 'description'
        },
        status: {
            type: Sequelize.INTEGER(1)
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            field: 'created_at'
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            field: 'updated_at'
        }
    }, {
        freezeTableName: true,
        underscored: true,
        tableName: 'users'
    });
  
    return Users;
};