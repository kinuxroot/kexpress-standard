'use strict';

const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;
const UDateTime = types.UDateTime;
const UObject = types.UObject;

const Face = model.createModel('Face', {
  externalId: UString(),
  image: UObject({
    type: 'Image'
  }),
  faceSet: UObject({
    type: 'FaceSet'
  }),
  feature: UString(),
  createdAt: UDateTime(),
  updatedAt: UDateTime()
}, 'face');

module.exports = {
  Face
};
