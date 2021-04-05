const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');
// middleware
const auth = require('../../middleware/auth');
// models
const User = require('../../models/User');
const Todo = require('../../models/Todo');

// @route    GET api/todo
// @desc     Get the todo list
// @access   private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    const todos = await Todo.find({ user: user.id });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

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

      const { content, location, date } = req.body;

      const todos = await Todo.findOne({ user: req.user.id });

      const item = {
        content,
        location,
        date,
        time: new Date(),
      };
      const todoList = todos.todos;

      todoList.unshift(item);

      await todos.save();

      return res.json(todos);
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
      const todos = await Todo.findOne({ user: req.user.id });
      const todoList = todos.todos;
      const item = todoList.find(item => item.id === req.params.item_id);

      if (!item) {
        return res.status(404).json({ msg: 'item does not exist' });
      }

      const { content, location, date } = req.body;

      item.content = content;
      item.location = location;
      item.date = date;

      await todos.save();

      return res.json(todos);
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
    const todos = await Todo.findOne({ user: req.user.id });
    const todoList = todos.todos;
    const item = todoList.find(item => item.id === req.params.item_id);

    if (!item) {
      return res.status(404).json({ msg: 'item does not exist' });
    }

    todos.todos = todos.todos.filter(({ id }) => id !== req.params.item_id);

    await todos.save();

    return res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
