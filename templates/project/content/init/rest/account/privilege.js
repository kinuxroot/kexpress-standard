'use strict';

module.exports = {
  path: '/privilege',
  summary: '权限管理模块',
  description: '权限管理',
  actions: {
    createPrivilege: {
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
    getPrivileges: {
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
