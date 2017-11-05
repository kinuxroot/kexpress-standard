const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;
const UObject = types.UObject;

const User = model.createModel('User', {
  loginName: UString(),
  password: UString(),
  role: UObject({
    type: 'Role'
  })
}, 'users');

module.exports = {
  User
};
