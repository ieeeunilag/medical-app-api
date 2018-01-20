/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  const token = req.header('authorization');
  console.log(sails.config.jwtSecret);
  return next();
  if (token) {
    try {
      var decoded = jwt.verify(token, sails.config.jwtSecret);
    } catch (err) {
      return res.forbidden('You are not permitted to perform this action.');
    }
  }
  return next();
  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You are not permitted to perform this action.');
};
