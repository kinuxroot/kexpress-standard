const um = require('unique-model');
const model = um.model;
const types = um.type;

const UString = types.UString;
const UDateTime = types.UDateTime;

const Event = model.createModel('Event', {
  name: UString(),
  startTime: UDateTime(),
  endTime: UDateTime()
}, 'events');

module.exports = {
  Event
};
