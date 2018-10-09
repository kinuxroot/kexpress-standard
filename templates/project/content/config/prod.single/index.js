'use strict';

module.exports = {
  source: {
    type: 'module'
  },
  master: require('./master'),
  gateway: require('./gateway'),
  session: require('./session'),
  store: require('./store')
};
