module.exports = {
  name: 'kexpress-standard',
  prompts: [{
    type: 'input',
    name: 'appName',
    message: 'Application name:'
  }],
  operations: [{
    type: 'mv',
    args: {
      from: '${projectName}/apps/verify',
      to: '${projectName}/apps/${template.appName}'
    }
  }, {
    type: 'mv',
    args: {
      from: 'template.gitignore',
      to: '.gitignore'
    }
  }, {
    type: 'replace',
    args: {
      pattern: 'verify',
      with: '${template.appName}',
      paths: [
        '${projectName}/config',
        '${projectName}/app.startup.js',
        '${projectName}/apps/${template.appName}'
      ]
    }
  }, {
    type: 'replace',
    args: {
      pattern: 'Tutor',
      with: {
        text: '${template.appName}',
        transform: function(appName) {
          const parts = appName.split('-').map(part => {
            return part.slice(0, 1).toUpperCase() + part.slice(1);
          });

          return parts.join('');
        }
      },
      paths: [
        '${projectName}/config',
        '${projectName}/server.js',
        '${projectName}/apps/${template.appName}'
      ]
    }
  }]
};
