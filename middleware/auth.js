const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const errorResponse = require('../utils/errorResponse');
const iser = require('../models/User');
const User = require('../models/User');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Make sure token is exist

  if (!token) {
    return next(new errorResponse('Not authorize to access this route', 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    return next(new errorResponse('Not authorize to access this route', 401));
  }
});
