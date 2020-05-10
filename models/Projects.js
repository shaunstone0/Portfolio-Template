const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name'],
  },
  picture: {
    type: String,
  },
  picture2: {
    type: String,
  },
  picture3: {
    type: String,
  },
  propicture: {
    type: String,
  },
  problemDesc: {
    type: String,
    required: [true, 'Please enter a description'],
  },
  detailedDesc: {
    type: String,
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
