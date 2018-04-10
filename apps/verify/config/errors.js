'use strict';

const kexpress = require('kexpress');
const defineLogicalErrors = kexpress.errors.defineLogicalErrors;

module.exports = defineLogicalErrors({
  InternalException: {
    id: 67001,
    message: 'Server internal exception',
    status: 500,
  },
  // If there is no status field, the default status is 500
  FieldsError: {
    id: 67003,
    message: 'The format of fields is incorrect.',
  }
});
