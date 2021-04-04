const users = require('./users/users.service.js');
const standard = require('./standard/standard.service.js');
const student = require('./student/student.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(standard);
  app.configure(student);
};
