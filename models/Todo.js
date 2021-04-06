const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  todos: [
    {
      content: {
        type: String,
      },
      location: {
        type: String,
      },
      date: {
        type: Date,
      },
      time: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model('Todo', TodoSchema);
