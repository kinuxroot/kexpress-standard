'use strict';

module.exports = {
  path: '/role',
  summary: '角色管理模块',
  description: '角色管理',
  actions: {
    createRole: {
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
        },
        500: {
          error: {
            id: [ 1001 ],
            message: 'string*'
          }
        }
      }
    },
    getRoles: {
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
        },
        404: {
          error: {
            id: [ 1002 ],
            message: 'string*'
          }
        }
      }
    }
  }
};
