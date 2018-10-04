'use strict';

module.exports = {
  source: {
    type: 'module'
  },
  master: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 3000
  },
  store: require('./store'),
  session: require('./session'),
};
