'use strict';

module.exports = {
  name: 'app',
  phases: {
    create: {
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
            '{{app.root}}/config/dev/session.js',
            '{{app.root}}/config/dev/store.js',
            '{{app.root}}/config/prod.single/logger.js',
            '{{app.root}}/config/prod.single/session.js',
            '{{app.root}}/config/prod.single/store.js'
          ]
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
