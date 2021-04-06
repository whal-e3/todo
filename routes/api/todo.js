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
// @desc     Create a empty todo item
// @access   private
router.post('/', auth, async (req, res) => {
  try {
    const todo = await Todo.findOne({ user: req.user.id });
    const { content, location } = req.body;

    const item = {
      content,
      date: new Date(),
      location,
      time: new Date(),
    };

    todo.todos.push(item);

    await todo.save();

    return res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/todo/:item_id
// @desc     Update a todo item in list
// @access   private
router.put(
  '/:item_id',
  [auth, [check('content', 'Content is required').not().isEmpty()]],
  async (req, res) => {
    try {
      const todo = await Todo.findOne({ user: req.user.id });
      const todoList = todo.todos;
      const item = todoList.find(item => item.id === req.params.item_id);

      if (!item) {
        return res.status(404).json({ msg: 'item does not exist' });
      }

      const { content, location, date } = req.body;

      item.content = content;
      item.location = location;
      item.date = date;

      await todo.save();

      return res.json(todo);
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
    const todo = await Todo.findOne({ user: req.user.id });
    const todoList = todo.todos;
    const item = todoList.find(item => item.id === req.params.item_id);

    if (!item) {
      return res.status(404).json({ msg: 'item does not exist' });
    }

    todo.todos = todo.todos.filter(({ id }) => id !== req.params.item_id);

    await todo.save();

    return res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
