const sequelize = require('../config/connection');
const { User, Biometrics, Exercises, Nutrition, } = require('../models');

const userData = require('./userData.json');
const biometricsData = require('./biometricsData.json');
const exerciseData = require('./exerciseData.json')
const nutritionData = require('./nutritionData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const User = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const Biometrics = await Biometrics.bulkCreate(biometricsData, {
        individualHooks: true,
        returning: true,
    });

    const Exercises = await Exercise.bulkCreate(exerciseData, {
        individualHooks: true,
        returning: true,
    });

    const Nutrition = await Nutrition.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();