'use strict';

module.exports = {
  path: '/object',
  summary: '对象管理模块',
  description: '对象管理',
  actions: {
    createObject: {
      path: '/',
      method: 'post',
      request: {
        contentType: 'application/json',
        body: {
          name: 'string*',
          description: 'string*'
        }
      },
      response: {
        contentType: 'application/json',
        200: {
          data: {
            id: 'string*',
            name: 'string*',
            description: 'string*'
          }
        }
      }
    },
    getObjects: {
      path: '/',
      method: 'get',
      request: {
        contentType: 'application/json',
      },
      response: {
        contentType: 'application/json',
        200: {
          data: [{
            id: 'string*',
            naem: 'string*',
            description: 'string*'
          }]
        }
      }
    }
  }
};
