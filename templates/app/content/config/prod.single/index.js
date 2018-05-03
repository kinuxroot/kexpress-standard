'use strict';

module.exports = {
  source: {
    type: 'module'
  },
  server: require('./server'),
  store: require('./store'),
  session: require('./session'),
  logger: require('./logger')
};
