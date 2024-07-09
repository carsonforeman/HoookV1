const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./user'); // Ensure correct path

const Venture = sequelize.define('Venture', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    specifics: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resources: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    privacy: {
        type: DataTypes.ENUM('public', 'private'),
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
});

User.hasMany(Venture, { foreignKey: 'userId' });
Venture.belongsTo(User, { foreignKey: 'userId' });

module.exports = Venture;
