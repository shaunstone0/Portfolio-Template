const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name'],
  },
  picture: {
    type: String,
    required: [true, 'Please enter a picture'],
  },
  desc: {
    type: String,
    required: [true, 'Please enter a description'],
  },
  tech: {
    type: Array,
    default: [],
  },
  todos: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model('Projects', ProjectsSchema);
