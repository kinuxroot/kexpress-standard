'use strict';

const um = require('unique-model');
const model = um.model;
const types = um.type;

const UObject = types.UObject;
const UObjectArray = types.UObjectArray;
const UInteger = types.UInteger;
const UDateTime = types.UDateTime;

const DetectTask = model.createModel('DetectTask', {
  image: UObject({
    type: 'Image'
  }),
  results: UObjectArray({
    type: 'DetectResult'
  }),
  status: UInteger(),
  createdAt: UDateTime()
}, 'detecttasks');

DetectTask.Status = {
  Successful: 0,
  Processing: 1,
  Failed: 2
};

module.exports = {
  DetectTask
};

