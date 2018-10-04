'use strict';

const {
  ObjectSetNotFound,
} = require('./errors');

module.exports = {
  path: '/object-set',
  summary: '对象集管理模块',
  description: '对象集管理',
  actions: {
    createObjectSet: {
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
    getObjectSets: {
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
    getObjectSet: {
      path: '/:objectSetId',
      method: 'get',
      request: {
        contentType: 'application/json',
        params: {
          objectSetId: 'string*'
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
            ObjectSetNotFound
          }
        }
      }
    }
  }
};
