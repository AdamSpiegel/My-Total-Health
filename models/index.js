// index.js is for pulling the other things together, but how is different from user.js?

const User = require('./User');
const Biometrics = require('./biometrics');

const Exercise = require('./exercises');
const Nutrition = require('./nutrition')

// const Exercises = require('./exercises');
// const Nutrition = require('./nutrition');
// const Exercise = require('./exercises');


// use 
// build out index to show different connections
// on delete cascade for all of them
User.hasMany(Exercise, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Biometrics, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Nutrition, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Exercise.belongsTo(User, {
    foreignKey: 'user_id'
});

Biometrics.belongsTo(User, {
    foreignKey: 'user_id'
});

Nutrition.belongsTo(User, {
    foreignKey: 'user_id'
});



module.exports = { User, Exercises, Biometrics, Nutrition };

