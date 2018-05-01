'use strict';

const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;
const UDateTime = types.UDateTime;

const Image = model.createModel('Image', {
  data: UString(),
  createdAt: UDateTime()
}, 'images');

module.exports = {
  Image
};
