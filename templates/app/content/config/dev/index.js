'use strict';

module.exports = {
  source: {
    type: 'module'
  },
  server: require('./server'),
  store: require('./store'),
  rpc: require('./rpc'),
  session: require('./session'),
  logger: require('./logger')
};
