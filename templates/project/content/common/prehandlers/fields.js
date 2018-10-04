'use strict';

const kexpress = require('kexpress');
const logger = kexpress.core.logger.output;
const errors = kexpress.errors.defineLogicalErrors(require('../errors'));

async function errorHandler(req, res, error) {
  logger.error(error);

  throw new errors.FieldsError(error);
}

module.exports = {
  errorHandler: errorHandler
};
