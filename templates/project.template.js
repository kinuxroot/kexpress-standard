'use strict';

module.exports = {
  name: 'project',
  subTemplates: {
    app: {
      root: '{{project.root}}/apps/{{app.name}}',
      template: 'app'
    }
  },
  phases: {
    create: {
      prompts: [{
        type: 'input',
        name: 'version',
        message: 'Version:',
        default: '1.0.0-alpha.1'
      }, {
        type: 'input',
        name: 'author',
        message: 'Author:',
        default: ''
      }, {
        type: 'license-list',
        name: 'license',
        message: 'License:',
        default: '',
      }],
      operations: [{
        type: 'kexpress.shelljs',
        args: {
          command: 'cp',
          args: [
            '-R',
            '{{template.root}}/content/*',
            '{{template.root}}/content/.*',
            '{{project.root}}'
          ]
        }
      }, {
        type: 'kexpress.handlebars',
        args: {
          files: [
            '{{project.root}}/package.json',
            '{{project.root}}/app.startup.js',
            '{{project.root}}/config/prod.single.js',
            '{{project.root}}/test/http/user.http',
            '{{project.root}}/init/rest/index.js'
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
