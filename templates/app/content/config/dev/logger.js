'use strict';

const AppName = '{{app.name}}';

module.exports = {
  appenders: {
    console: {
      type: 'console'
    },
    info: {
      type: 'dateFile',
      filename: `logs/${AppName}/info.log`,
      maxLogSize: 1024 * 1024 * 16,
      backups: 3
    },
    error: {
      type: 'dateFile',
      filename: `logs/${AppName}/error.log`,
      maxLogSize: 1024 * 1024 * 16,
      backups: 3
    },
    access: {
      type: 'dateFile',
      filename: `logs/${AppName}/access.log`,
      maxLogSize: 1024 * 1024 * 16,
      backups: 3
    }
  },
  categories: {
    info: {
      appenders: [
        'console', 'info'
      ],
      level: 'info'
    },
    error: {
      appenders: [
        'console', 'error', 'info'
      ],
      level: 'error'
    },
    access: {
      appenders: [
        'console', 'access'
      ],
      level: 'info'
    }
  }
};
