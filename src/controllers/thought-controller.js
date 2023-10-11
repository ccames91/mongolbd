const express = require('express');
const router = express.Router();
const { User, Thought } = require('../models'); 

router.get('/thoughts', async (req, res) => {
  try {
    const thoughts = await Thought.find().populate('reactions');
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
