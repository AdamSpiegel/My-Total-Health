// where to add exercises the user has completed
// did you do x exercise and for how long?

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model { }

Exercise.init({
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
    // exercises now? allow for input of type of exercise?
    // strength, cardio, flex, mindfull
    strength_training: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cardio: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    flexible: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mindfullness: {
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