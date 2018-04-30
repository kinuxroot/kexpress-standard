'use strict';

module.exports = {
  name: 'app',
  phases: {
    create: {
      prompts: [{
        type: 'input',
        name: 'name',
        message: 'Application name:'
      }],
      operations: []
    },
    init: {
      operations: []
    }
  },
  plugins: {
  }
};
