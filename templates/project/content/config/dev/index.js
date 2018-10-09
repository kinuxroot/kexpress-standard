'use strict';

module.exports = {
  source: {
    type: 'module'
  },
  master: require('./master'),
  store: require('./store'),
  session: require('./session'),
};
