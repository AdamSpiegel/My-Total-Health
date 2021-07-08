// where to add exercises the user has completed
// did you do x exercise and for how long?

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model { }

Exercise.init({
    // I think some of this is redundant, do we need lines 11-28 for this?
    exercise_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    exercise_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    exercise_description: {
        type: DataTypes.STRING,
    },
    exercise_date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    // exercises now? allow for input of type of exercise?
    strength_training: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cardio: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    flexibility: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mindset: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lifestyle: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'exercises',
    }
)

module.exports = Exercise;