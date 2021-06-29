const router = require('express').Router();
const { Biometric } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newWorkout = await Biometric.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const healthData = await Biometric.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!healthData) {
      res.status(404).json({ message: 'No current plan found with this id!' });
      return;
    }

    res.status(200).json(healthData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
