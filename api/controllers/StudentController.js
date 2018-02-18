/**
 * StudentController
 *
 * @description :: Server-side logic for managing Students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create(req, res) {
    req.body.owner = req.user.uniqueId;
    Student.create(req.body)
      .then((student) => {
        res.ok({ student });
      })
      .catch((err) => {
        res.notFound({ err });
      });
  },
};

