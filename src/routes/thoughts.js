const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require('../controllers/thought-controller');

// Define routes
router.route('/thoughts')
  .get(getAllThoughts)
  .post(createThought);

router.route('/thoughts/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
