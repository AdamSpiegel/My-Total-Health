const router = require('express').Router();
const { Biometrics, User, Exercise, Nutrition } = require('../models');
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

    const biometric = biometricData.get({ plain: true });

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

router.get('/', async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll({
      include: [
        {
          model: Nutrition,
          attributes: ['name', 'description'],
        },
      ],
    });

    const exercises = exerciseData.map((exercise) =>
      exercise.get({ plain: true })
    );

    res.render('homepage', {
      exercises,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one exercise
router.get('/exercises/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the exercises
    try {
      const exerciseData = await Exercise.findByPk(req.params.id, {
        include: [
          {
            model: nutrition,
            attributes: [
              'id',
              'name',
              'description',
              'date_created',
              'caloric_intake',
              'cups_water',
            ],
          },
        ],
      });
      const exercise = exerciseData.get({ plain: true });
      res.render('exercises', { exercises, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET on ly nutrition information
router.get('/nutrition/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the nutrition information
    try {
      const nutritionData = await Nutrition.findByPk(req.params.id);

      const nutrition = nutritionData.get({ plain: true });

      res.render('nutrition', { nutrition, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
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
