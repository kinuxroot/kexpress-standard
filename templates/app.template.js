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
      }]
    },
    init: {
      operations: []
    }
  },
  plugins: {
  }
};
