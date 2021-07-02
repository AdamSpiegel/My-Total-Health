const User = require('./User');
const Biometrics = require('./biometrics');
const Exercise = require('./exercises');
const Nutrition = require('./nutrition')


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



module.exports = { User, Exercise, Biometrics, Nutrition };

