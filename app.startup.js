'use strict';

/* eslint-disable quote-props */

const path = require('path');

module.exports = {
  name: 'recognize-api',
  config: path.join(__dirname, './config'),
  // Default value: 1
  version: 1,
  // Default value: /v${version}
  base: '/v1',
  host: 'www.example.com',
  apps: {
    'verify': {
      // Default value: /${name}
      base: '/verify',
      app: require('./apps/verify/app').Application,
      config: path.join(__dirname, './apps/verify/config')
    }
  }
};
