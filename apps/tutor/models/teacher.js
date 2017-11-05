const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;

const Teacher = model.createModel('Teacher', {
  name: UString(),
  faculty: UString(),
  telephone: UString(),
  email: UString(),
  research: UString(),
  introduction: UString(),
}, 'teachers');

module.exports = {
  Teacher
};
