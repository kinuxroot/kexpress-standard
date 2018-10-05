'use strict';

module.exports = {
  name: 'app',
  phases: {
    create: {
      variables: [{
        scope: 'template',
        name: 'server.port',
        initial: 3001,
      }],
      operations: [{
        type: 'kexpress.shelljs',
        args: {
          command: 'mkdir',
          args: [
            '-p',
            '{{app.root}}'
          ]
        }
      }, {
        type: 'kexpress.shelljs',
        args: {
          command: 'cp',
          args: [
            '-R',
            '{{template.root}}/content/*',
            '{{app.root}}'
          ]
        }
      }, {
        type: 'kexpress.handlebars',
        args: {
          files: [
            '{{app.root}}/config/dev/logger.js',
            '{{app.root}}/config/dev/server.js',
            '{{app.root}}/config/prod.single/logger.js',
            '{{app.root}}/config/prod.single/server.js',
          ]
        }
      }, {
        type: 'kexpress.variable',
        args: {
          input: [
            '{{app.server.port}}'
          ],
          op: port => Number.parseInt(port) + 1,
          output: 'server.port'
        }
      }]
    },
    init: {
      operations: []
    }
  },
  plugins: {
  }
};
