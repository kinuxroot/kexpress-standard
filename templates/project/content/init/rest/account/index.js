'use strict';

module.exports = {
  path: '/user',
  modules: {
    role: require('./role'),
    privilege: require('./privilege')
  }
};
