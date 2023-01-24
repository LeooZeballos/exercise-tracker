const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// GET all exercises
router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST a new exercise
router.route('/').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise.save()
    .then(() => res.status(201).json('Exercise added: ' + description))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET an exercise by id
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE an exercise by id
router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE an exercise by id
router.route('/:id').put((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);
    })
    .then(() => res.status(200).json('Exercise updated.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;