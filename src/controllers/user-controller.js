const express = require('express');
const router = express.Router();
const { User, Thought } = require('../models'); 

router.get('/users', async (req, res) => {
  try {
    const users = await User.find().populate('thoughts');
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
