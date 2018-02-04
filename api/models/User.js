/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
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
      enum: ['Student', 'Staff', 'Doctor','Nurse','Lab attendant'],
      required: true,
    }

  },
  afterValidate(values,cb){
    if ('password' in values) {
      values['password'] = bcrypt.hashSync(values['password']);
    }
    cb();
  }


};

