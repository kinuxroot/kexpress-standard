'use strict';

const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;
const UDouble = types.UDouble;
const UDateTime = types.UDateTime;
const UMixed = types.UMixed;

const DetectResult = model.createModel('DetectResult', {
  rect: UMixed(),
  landmarks: UMixed(),
  roll: UDouble(),
  yaw: UDouble(),
  pitch: UDouble(),
  cropImage: UString(),
  createdAt: UDateTime()
}, 'detectresults');

module.exports = {
  DetectResult
};
