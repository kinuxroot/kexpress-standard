'use strict';

const um = require('unique-model');
const model = um.model;
const types = um.type;

const UObject = types.UObject;
const UInteger = types.UInteger;
const UDateTime = types.UDateTime;

const PropTask = model.createModel('PropTask', {
  image: UObject({
    type: 'Image'
  }),
  result: UObject({
    type: 'PropResult'
  }),
  status: UInteger(),
  createdAt: UDateTime()
}, 'proptasks');

module.exports = {
  PropTask
};

