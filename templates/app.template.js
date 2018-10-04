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
            '{{app.root}}/config/prod.single/logger.js',
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
