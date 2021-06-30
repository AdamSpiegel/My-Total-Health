// where to add biometrics
// how often do you want to log biometrics?

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Biometrics extends Model { }

Biometrics.init({
    // I think some of this is redundant, do we need lines 11-28 for this?
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    // biometrics now?
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    avg_blood_pressure: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    resting_heart_rate: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    BMI: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    percent_body_fat: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
    })

module.exports = Biometrics;