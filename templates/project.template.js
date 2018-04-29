'use strict';

module.exports = {
  name: 'project',
  subTemplates: {
    app: {
      initPath: 'apps/{{app.name}}',
      template: 'app'
    }
  },
  prompts: [{
    type: 'input',
    name: 'version',
    message: 'Version:',
    default: '1.0.0'
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
        '{{template.templateRoot}}/*',
        '{{project.root}}'
      ]
    }
  }, {
    type: 'kexpress.handlebars',
    args: {
      files: [
        '{{project.root}}/package.json',
        '{{project.root}}/app.startup.js'
      ]
    }
  }]
};
