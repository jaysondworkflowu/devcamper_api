// Express Router
const { Router } = require('express');
const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
} = require('../controllers/bootcamps');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/').get(getBootcamps).post(protect, createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(protect, deleteBootcamp);

module.exports = router;
