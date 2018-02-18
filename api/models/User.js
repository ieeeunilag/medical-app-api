/**
 * User.js
 *
*/
/* eslint no-param-reassign: ["error", { "props": false }] */
const bcrypt = require('bcryptjs');

module.exports = {

  attributes: {
    uniqueId: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
      protected: true,
    },
    type: {
      type: 'string',
      enum: ['Student', 'Staff', 'Doctor', 'Nurse', 'Lab attendant'],
      required: true,
    },

  },
  afterValidate(values, cb) {
    if ('password' in values) {
      values.password = bcrypt.hashSync(values.password);
    }
    cb();
  },


};

