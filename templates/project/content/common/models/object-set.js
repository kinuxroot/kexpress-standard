'use strict';

const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;
const UDateTime = types.UDateTime;

const ObjectSet = model.createModel('ObjectSet', {
  name: UString(),
  createdAt: UDateTime(),
  updatedAt: UDateTime()
}, 'objectsets');

module.exports = {
  ObjectSet
};
