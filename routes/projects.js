const express = require('express');
const { getAllProjects, getProjectById } = require('../controllers/projects');
const Projects = require('../models/Projects');
const advancedResults = require('../middleware/advancedResults');
const router = express.Router();

router.route('/').get(getAllProjects);

router.route('/:id').get(getProjectById);

module.exports = router;
