const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  todos: [
    {
      content: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      time: {
        type: Date,
      },
    },
  ],
});

module.exports = mongoose.model('Todos', TodosSchema);
