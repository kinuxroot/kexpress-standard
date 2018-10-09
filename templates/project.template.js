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
      variables: [{
        scope: 'instance',
        name: 'session.secret',
        initial: '1234dsjf',
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
        type: 'kexpress.shelljs',
        args: {
          command: 'mv',
          args: [
            '{{project.root}}/.gitignore.template',
            '{{project.root}}/.gitignore'
          ]
        }
      }, {
        type: 'kexpress.shelljs',
        args: {
          command: 'mv',
          args: [
            '{{project.root}}/.npmignore.template',
            '{{project.root}}/.npmignore'
          ]
        }
      }, {
        type: 'kexpress.random',
        args: {
          type: 'string',
          input: [
            'Aa0!', 16
          ],
          output: 'session.secret'
        }
      }, {
        type: 'kexpress.handlebars',
        args: {
          files: [
            '{{project.root}}/package.json',
            '{{project.root}}/app.startup.js',
            '{{project.root}}/config/dev/session.js',
            '{{project.root}}/config/dev/store.js',
            '{{project.root}}/config/dev/master.js',
            '{{project.root}}/config/prod.single/session.js',
            '{{project.root}}/config/prod.single/store.js',
            '{{project.root}}/config/prod.single/master.js',
            '{{project.root}}/config/prod.single/gateway.js',
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
