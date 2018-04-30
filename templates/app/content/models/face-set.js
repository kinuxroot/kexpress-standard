'use strict';

const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;
const UDateTime = types.UDateTime;

const FaceSet = model.createModel('FaceSet', {
  name: UString(),
  createdAt: UDateTime(),
  updatedAt: UDateTime()
}, 'facesets');

module.exports = {
  FaceSet
};
