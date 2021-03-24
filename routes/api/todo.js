const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');
const config = require('config');
// middleware
const auth = require('../../middleware/auth');
// models
const User = require('../../models/User');

// @route    POST api/todo
// @desc     Create a todo item in the list
// @access   private
router.post(
  '/',
  [auth, [check('content', 'Content is required').not().isEmpty()]],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
      }

      const { content, location } = req.body;

      const user = await User.findById(req.userId.id);

      let item = {
        content,
        location,
        time: new Date(),
      };

      user.todo.unshift(item);

      await user.save();

      return res.json(user.todo);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    PUT api/todo/:item_id
// @desc     Update a todo item in list
// @access   private
router.put(
  '/:item_id',
  [auth, [check('content', 'Content is required').not().isEmpty()]],
  async (req, res) => {
    try {
      const user = await User.findById(req.userId.id);
      const item = user.todo.find(item => item.id === req.params.item_id);

      if (!item) {
        return res.status(404).json({ msg: 'Comment does not exist' });
      }

      const { content, location } = req.body;

      item.content = content;
      item.location = location;

      await user.save();

      return res.json(user.todo);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/todo/:item_id
// @desc     Delete a todo item in list
// @access   private
router.delete('/:item_id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId.id);
    const item = user.todo.find(item => item.id === req.params.item_id);

    if (!item) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }

    user.todo = user.todo.filter(({ id }) => id !== req.params.item_id);

    await user.save();

    return res.json(user.todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
