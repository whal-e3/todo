const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');
const config = require('config');
// middleware
const auth = require('../../middleware/auth');
// models
const Todos = require('../../models/Todos');

// @route    PUT api/todos
// @desc     Put a todo item in list
// @access   private
router.get('/', auth, async (req, res) => {
  try {
    let todo = {
      // TODO: req.body.something
      content: 'sample content',
      location: 'New York',
      time: new Date(),
    };
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
