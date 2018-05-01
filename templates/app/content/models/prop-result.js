'use strict';

const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;
const UDouble = types.UDouble;
const UDateTime = types.UDateTime;

const PropResult = model.createModel('PropResult', {
  result: UString(),
  age: UDouble(),
  gender: UDouble(),
  smile: UDouble(),
  createdAt: UDateTime()
}, 'propresults');

module.exports = {
  PropResult
};
