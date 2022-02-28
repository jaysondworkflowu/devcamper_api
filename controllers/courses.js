const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const Course = require('../models/Course');
const { query } = require('express');

// @desc Get all course
// @route GET /api/v1/courses
// @route GET /api/v1/bootcamps/:bootcampID/courses
// @access Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  let courses;

  if (req.params.bootcampId) {
    courses = await Course.find({ bootcamp: req.params.bootcampId });
  } else {
    courses = await Course.find();
  }

  // const courses = await query;

  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses,
  });
});
