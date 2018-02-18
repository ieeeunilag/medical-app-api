/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  login(req, res) {
    User.findOne({ uniqueId: req.body.uniqueId })
      .then(user => bcrypt.compareSync(req.body.password, user.password))
      .then((result) => {
        if (result) {
          const { uniqueId, role } = req.body;

          const token = jwt.sign(
            {
              data: {
                uniqueId,
                role,
              },
            },
            sails.config.jwtSecret,
            { expiresIn: '1y' },
          );
          return res.ok({ token });
        }
        return res.forbidden('Invalid user name or password');
      }).catch(() => res.forbidden('Invalid user name or password'));
  },
};

