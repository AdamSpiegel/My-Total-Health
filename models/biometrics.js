// where to add biometrics
// how often do you want to log biometrics?

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Biometrics extends Model { }

Biometrics.init({
    // I think some of this is redundant, do we need lines 11-28 for this?
    bio_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    bio_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio_description: {
        type: DataTypes.STRING,
    },
    bio_date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    // biometrics now?
    weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    avg_blood_pressure: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    resting_heart_rate: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    bmi: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    body_fat: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'biometrics',
    })

module.exports = Biometrics;