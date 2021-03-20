const express = require('express');
const router = express.Router();

// @route    POST api/todo
// @desc     Create a todo
// @access   private
router.get('/', (req, res) => {
  res.send('todo route');
});

module.exports = router;
