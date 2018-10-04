'use strict';

const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;
const UDateTime = types.UDateTime;
const UObject = types.UObject;

const DObject = model.createModel('DObject', {
  externalId: UString(),
  image: UObject({
    type: 'Image'
  }),
  objectSet: UObject({
    type: 'FaceSet'
  }),
  feature: UString(),
  createdAt: UDateTime(),
  updatedAt: UDateTime()
}, 'objects');

module.exports = {
  DObject
};
