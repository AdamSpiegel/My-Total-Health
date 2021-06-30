const router = require('express').Router();
const { Biometrics, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const biometricData = await Biometrics.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const biometrics = biometricData.map((biometrics) => biometrics.get({ plain: true }));

    res.render('homepage', { 
      biometrics, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/biometrics/:id', async (req, res) => {
  try {
    const biometricData = await Biometrics.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const biometrics = biometricData.get({ plain: true });

    res.render('biometrics', {
      ...biometric,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Biometrics }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
