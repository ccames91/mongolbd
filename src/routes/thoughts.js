const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
  } = require('./controllers/thought-controller'); 
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


  