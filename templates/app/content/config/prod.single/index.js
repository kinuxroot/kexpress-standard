'use strict';

module.exports = {
  source: {
    type: 'module'
  },
  server: require('./server'),
  logger: require('./logger')
};
