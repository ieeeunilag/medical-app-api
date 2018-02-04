/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
  test(req, res) {
    const dd = jwt.sign({
      data: 'foobar'
    }, 'secret', { expiresIn: '5s' });
    console.log(dd);

    const ss = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZm9vYmFyIiwiaWF0IjoxNTE2NDg0MjMzLCJleHAiOjE1MTY0ODQyMzh9.dHJGZDPTcuSKs1LQvK9yj_POEILscCVmfAEqdotlsYs';
    var decoded = jwt.verify(ss, 'secret');
    console.log(decoded);
    return res.ok('Segun');
  },

  login(req, res) {
    console.log(req.body);
    User.findOne({ uniqueId: req.body.uniqueId }).then((user) => {
      console.log(user);
      return bcrypt.compareSync(req.body.password, user.password);
    }).then((result) => {
      if (result) {
        const uniqueId = req.body.uniqueId;
        const role = req.body.role;

        const token = jwt.sign({
          data: {
            uniqueId,
            role,
          },
        },
          sails.config.jwtSecret,
          { expiresIn: '1d' }
        );
        return res.ok({token});
      }
      return res.forbidden('Invalid user name or password');

    }).catch((err) => {
      return res.forbidden('Invalid user name or password');
    });

  }
};

