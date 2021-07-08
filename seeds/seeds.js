const sequelize = require('../config/connection');
const { User, Biometrics, Exercise, Nutrition } = require('../models');

const userData = require('./userData.json');
const biometricsData = require('./biometricsData.json');
const exerciseData = require('./exerciseData.json')
const nutritionData = require('./nutritionData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const userSeed = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

     const biometricsSeed = await Biometrics.bulkCreate(biometricsData, {
        individualHooks: true,
        returning: true,
    });

     const exerciseSeed = await Exercise.bulkCreate(exerciseData, {
        individualHooks: true,
        returning: true,
    });

     const nutritionSeed = await Nutrition.bulkCreate(nutritionData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();