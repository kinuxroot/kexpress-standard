'use strict';

const {
  RoleNotFound,
} = require('./errors');

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
        }
      }
    },
    getRoles: {
      path: '/',
      method: 'get',
      request: {
        contentType: 'application/json',
        query: {
          skip: {
            $type: 'integer',
            $default: 0
          },
          limit: {
            $type: 'integer',
            $default: 10
          }
        }
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
    },
    getRole: {
      path: '/:roleId',
      method: 'get',
      request: {
        contentType: 'application/json',
        params: {
          roleId: 'string*'
        }
      },
      response: {
        contentType: 'application/json',
        200: {
          data: [{
            id: 'string*',
            name: 'string*',
            description: 'string*'
          }]
        },
        404: {
          errors: {
            RoleNotFound
          }
        }
      }
    }
  }
};
