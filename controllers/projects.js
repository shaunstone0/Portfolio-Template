const asyncHandler = require('../middleware/async');
const Projects = require('../models/Projects');
const ErrorResponse = require('../middleware/errorRepsponse');

exports.getAllProjects = asyncHandler(async (req, res, next) => {
  const projects = await Projects.find();

  res.status(200).json({ data: projects });
});

exports.getProjectById = asyncHandler(async (req, res, next) => {
  const project = await Projects.findById(req.params.id);
  res.status(200).json({ data: project });

  if (!project) {
    return next(
      new ErrorResponse(`No project found with the id of ${req.params.id}`, 404)
    );
  }
});
