/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
const bcrypt = require('bcryptjs');
module.exports = {

  attributes: {
    address: {
      type: 'string',
      required: true,
    },
    age: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    ethnicGroup: {
      type: 'string',
      required: true,
    },
    gsm: {
      type: 'string',
      required: true,
    },
    matricNo: {
      type: 'string',
      required: true,
    },
    otherNameKin: {
      type: 'string',
      required: true,
    },
    otherNames: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
      protected: true,
    },
    sex: {
      type: 'string',
      required: true,
    },
    staffOrStudent: {
      type: 'string',
      required: true,
    },
    surname: {
      type: 'string',
      required: true,
    },
    surnameKin: {
      type: 'string',
      required: true,
    },
    telephoneOffice: {
      type: 'string',
    }

  },
  afterValidate(values,cb){
    if ('password' in values) {
      values['password'] = bcrypt.hashSync(values['password']);
    }
    cb();
  }


};

