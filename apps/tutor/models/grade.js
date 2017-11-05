const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;
const UObjectArray = types.UObjectArray;

const Grade = model.createModel('Grade', {
  name: UString(),
  events: UObjectArray({
    type: 'Event'
  }),
  students: UObjectArray({
    type: 'Student'
  }),
  teachers: UObjectArray({
    type: 'Teacher'
  })
}, 'grades');

module.exports = {
  Grade
};
