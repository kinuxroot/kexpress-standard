'use strict';

module.exports = {
  name: 'hello',
  version: '1.0.0-alpha.1',
  description: 'Hello world application',
  basePath: '/hello/v1',
  apps: {
    user: require('./user')
  }
};
