'use strict';

const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;
const UObjectArray = types.UObjectArray;

const User = model.createModel('User', {
  loginName: UString(),
  password: UString(),
  roles: UObjectArray({
    type: 'Role'
  })
}, 'users');

module.exports = {
  User
};
