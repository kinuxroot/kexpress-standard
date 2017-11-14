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
      from: '${projectName}/apps/tutor',
      to: '${projectName}/apps/${template.appName}'
    }
  }, {
    type: 'replace',
    args: {
      pattern: 'tutor',
      with: '${template.appName}',
      paths: ['${projectName}'],
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
      paths: ['${projectName}']
    }
  }]
};
