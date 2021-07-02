
// calorie/nutrition apis

// models push on 6-29
// what is your total caloric intake?
// how about water?

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Nutrition extends Model { }

Nutrition.init({
    nutrition_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nutrition_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nutrition_description: {
        type: DataTypes.STRING,
    },
    nutrition_date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        // unalterable, maybe have user enter time and date?
        // add a now feature
    },
    caloric_intake: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    cups_water: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'nutrition',
    }

)


module.exports = Nutrition;

// calorine/nutrition apis
// >>>>>>> main


