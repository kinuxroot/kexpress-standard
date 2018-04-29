'use strict';

const { Image, Face, FaceSet } = require('../models');

module.exports = {
  actionGetFaceSets: {
    request: {
      contentType: 'application/json',
      query: {
        offset: {
          $type: 'integer',
          $default: 0
        },
        count: {
          $type: 'integer',
          $default: 10
        }
      }
    },
    response: {
      contentType: 'application/json',
      200: {
        data: {
          $required: true,
          offset: 'integer*',
          total: 'integer*',
          faceSets: [{
            $required: true
          }, {
            id: 'string',
            name: 'string',
            createdAt: 'dateTime',
            updatedAt: 'dateTime'
          }]
        }
      }
    },
    store: {
      default: {
        FaceSet
      }
    }
  },
  actionCreateFaceSet: {
    request: {
      contentType: 'application/json',
      body: {
        name: 'string*'
      }
    },
    response: {
      contentType: 'application/json',
      200: {
        data: {
          $required: true,
          id: 'string',
          name: 'string',
          createdAt: 'dateTime',
          updatedAt: 'dateTime'
        }
      }
    },
    store: {
      default: {
        FaceSet
      }
    }
  },
  actionDeleteFaceSet: {
    request: {
      contentType: 'application/json',
      params: {
        faceSetId: 'string*'
      }
    },
    response: {
      contentType: 'application/json',
      200: {
        data: {
          $required: true,
          id: 'string',
          name: 'string',
          createdAt: 'dateTime',
          updatedAt: 'dateTime'
        }
      },
      404: {
        error: {
          id: [ 10002 ],
          message: 'string*'
        }
      }
    },
    store: {
      default: {
        FaceSet
      }
    }
  },
  actionAddFace: {
    request: {
      contentType: 'application/json',
      params: {
        faceSetId: 'string*'
      },
      body: {
        externalId: 'string*',
        imageData: 'string*'
      }
    },
    response: {
      contentType: 'application/json',
      200: {
        data: {
          $required: true,
          id: 'string',
          createdAt: 'dateTime',
          updatedAt: 'dateTime'
        }
      }
    },
    store: {
      default: {
        Image,
        Face,
        FaceSet
      }
    }
  },
  actionDeleteFace: {
    request: {
      contentType: 'application/json',
      params: {
        faceSetId: 'string*',
        faceId: 'string*'
      },
    },
    response: {
      contentType: 'application/json',
      200: {
        data: {
          $required: true,
          id: 'string',
          createdAt: 'dateTime',
          updatedAt: 'dateTime'
        }
      },
      404: {
        error: {
          id: [ 10004 ],
          message: 'string*'
        }
      }
    },
    store: {
      default: {
        Image,
        Face,
        FaceSet
      }
    }
  }
};
