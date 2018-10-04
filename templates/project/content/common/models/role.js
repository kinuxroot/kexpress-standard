'use strict';

const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;
const UObjectArray = types.UObjectArray;

const Role = model.createModel('Role', {
  name: UString(),
  description: UString(),
  privileges: UObjectArray({
    type: 'Privilege'
  })
}, 'roles');

module.exports = {
  Role
};
