'use strict';

const path = require('path');

module.exports = {
  name: '{{project.name}}',
  config: path.join(__dirname, './config'),
  // Default value: 1
  version: 1,
  // Default value: /v${version}
  base: '/v1',
  host: 'www.example.com',
  apps: {
  }
};
