const router = require('express').Router();
let User = require('../models/user.model');

// GET all users
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST a new user
router.route('/').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.status(201).json('User added: ' + username))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET a user by id
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE a user by id
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// UPDATE a user by id
router.route('/:id').put((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;
    })
    .then(() => res.status(200).json('User updated.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
