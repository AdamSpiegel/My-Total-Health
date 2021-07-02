const sequelize = require('../config/connection');
const { User, Biometrics, Exercise, Nutrition } = require('../models');

const userData = require('./userData.json');
const biometricsData = require('./biometricsData.json');
const exerciseData = require('./exerciseData.json')
const nutritionData = require('./nutritionData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

     User = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

     Biometrics = await Biometrics.bulkCreate(biometricsData, {
        individualHooks: true,
        returning: true,
    });

     Exercise = await Exercise.bulkCreate(exerciseData, {
        individualHooks: true,
        returning: true,
    });

     Nutrition = await Nutrition.bulkCreate(nutritionData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();