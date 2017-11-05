const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;
const UObject = types.UObject;

const Student = model.createModel('Student', {
  sid: UString(),
  name: UString(),
  telephone: UString(),
  email: UString(),
  user: UObject({
    type: 'User'
  }),
  tutor: UObject({
    type: 'Teacher'
  })
}, 'students');

module.exports = {
  Student
};
