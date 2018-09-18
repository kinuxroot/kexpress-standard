'use strict';

const path = require('path');

module.exports = {
  name: '{{{project.name}}}',
  config: path.join(__dirname, './config'),
  // Default value: 1
  version: 1,
  // Default value: /v${version}
  base: '/{{project.name}}/v1',
  host: 'www.example.com',
  apps: {
  {{{{raw}}}}
  {{#for apps}}
    {{name}}: {
      base: '{{path}}',
      app: require('./apps/{{name}}/app').Application,
      config: path.join(__dirname, './apps/{{name}}/config')
    },
  {{/for}}
  {{{{/raw}}}}
  }
};
