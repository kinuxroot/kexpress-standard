'use strict';

module.exports = {
  name: 'hello',
  version: '1.0.0-alpha.1',
  description: 'Description',
  basePath: '/{{project.name}}/v1',
  apps: {
    account: require('./account')
  }
};
