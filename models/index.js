// index.js is for pulling the other things together, but how is different from user.js?

const User = require('./User');
const Biometrics = require('./biometrics');
const Exercises = require('./exercises');

User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Exercises, Biometrics };