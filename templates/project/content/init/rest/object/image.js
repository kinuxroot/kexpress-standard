'use strict';

module.exports = {
  path: '/image',
  summary: '图像管理模块',
  description: '图像管理',
  actions: {
    createImage: {
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
    getImages: {
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
