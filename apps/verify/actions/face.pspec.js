'use strict';

const { Image, DetectResult, DetectTask } = require('../models');

module.exports = {
  actionDetectFace: {
    request: {
      body: {
        type: 'object',
        required: true,
        properties: {
          imageData: {
            type: 'string',
            required: true
          }
        }
      }
    },
    response: {
      contentType: [
        'application/json'
      ],
      200: {
        type: 'object',
        required: true,
        properties: {
          error: {
            type: 'object',
            required: false,
            properties: {
              id: 'integer*'
            }
          },
          data: {
            type: 'array',
            required: true,
            item: {
              type: 'object',
              properties: {
                rect: {
                  type: 'object',
                  required: true,
                  properties: {
                    left: 'float*',
                    top: 'float*',
                    right: 'float*',
                    bottom: 'float*',
                  }
                },
                landmarks: {
                  type: 'array',
                  required: true,
                  item: {
                    type: 'object',
                    properties: {
                      x: 'float*',
                      y: 'float*'
                    }
                  }
                },
                roll: 'float*',
                yaw: 'float*',
                pitch: 'float*',
                cropImage: 'string*'
              }
            }
          }
        }
      }
    },
    store: {
      default: {
        Image,
        DetectResult,
        DetectTask
      }
    }
  }
};
