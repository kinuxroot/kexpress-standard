const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;

const Privilege = model.createModel('Privilege', {
  name: UString(),
}, 'privileges');

module.exports = {
  Privilege
};
