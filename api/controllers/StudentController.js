/**
 * StudentController
 *
 * @description :: Server-side logic for managing Students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create(req, res) {
    const { uniqueId } = req.user;
    User.findOne({
      uniqueId,
    }).then((result) => {
      req.body.owner = result.id;
      return Student.create(req.body);
    }).then((student) => {
      res.ok(student);
    }).catch((err) => {
      res.notFound({ err });
    });
  },
  findStudentByuniqueId(req, res) {
    const { uniqueId } = req.user;
    User.findOne({
      uniqueId,
    }).then((result) => {
      const owner = result.id;
      return Student.findOne({
        owner,
      }).populate('owner');
    }).then((student) => {
      if (!student) {
        res.notFound();
        return;
      }
      res.ok(student);
    }).catch((err) => {
      res.notFound({ err });
    });
  },
};

