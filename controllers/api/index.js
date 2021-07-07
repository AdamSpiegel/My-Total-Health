const router = require('express').Router();
const userRoutes = require('./user-routes');
const biometricRoutes = require('./biometric-routes');

router.use('/users', userRoutes);
router.use('/biometrics', biometricRoutes);

module.exports = router;
