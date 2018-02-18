/**
 * Student.js
 *
*/

module.exports = {

  attributes: {
    owner: {
      model: 'user',
      unique: true,
    },
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
    otherNameKin: {
      type: 'string',
      required: true,
    },
    otherNames: {
      type: 'string',
      required: true,
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
    },
  },
};

