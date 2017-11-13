module.exports = {
  name: 'kexpress-standard',
  prompts: [{
    type: 'input',
    name: 'appName',
    message: 'Please input the name of application'
  }],
  operations: [{
    type: 'mv',
    args: {
      from: 'apps/tutor',
      to: 'apps/${template.appName}'
    }
  }, {
    type: 'replace',
    args: {
      pattern: 'tutor',
      with: '${template.appName}'
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
      }
    }
  }]
};
