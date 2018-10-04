'use strict';

module.exports = {
  name: '{{{project.name}}}',
  version: '{{{project.version}}}',
  description: 'Description',
  basePath: '/{{project.name}}/v1',
  apps: {
    account: require('./account'),
    object: require('./object')
  }
};
