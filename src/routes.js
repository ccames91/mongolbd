const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('./controllers/user-controller'); 
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('./controllers/thought-controller'); 


router.route('/users')
  .get(getAllUsers)
  .post(createUser);

router.route('/users/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);


router.route('/thoughts')
  .get(getAllThoughts)
  .post(createThought);

router.route('/thoughts/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);


router.route('/thoughts/:thoughtId/reactions')
  .post(addReaction);

router.route('/thoughts/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;

