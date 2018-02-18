/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 */
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  const token = req.header('authorization');

  if (token) {
    try {
      const decoded = jwt.verify(token, sails.config.jwtSecret);
      req.user = decoded.data;
      req.user.token = token;
      return next();
    } catch (err) {
      return res.forbidden('You are not permitted to perform this action.');
    }
  }
  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You are not permitted to perform this action.');
};
