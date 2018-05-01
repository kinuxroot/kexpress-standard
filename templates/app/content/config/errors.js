'use strict';

const kexpress = require('kexpress');
const defineLogicalErrors = kexpress.errors.defineLogicalErrors;

module.exports = defineLogicalErrors({
  InternalException: {
    id: 1,
    message: 'Server internal exception',
    status: 500,
  },
  // If there is no status field, the default status is 500
  FieldsError: {
    id: 1001,
    message: 'The format of fields is incorrect.',
  },
  FaceSetExisted: {
    id: 10001,
    message: '该人脸库已经存在'
  },
  FaceSetNotFound: {
    id: 10002,
    message: '该人脸库不存在',
    status: 404
  },
  FaceNotDetected: {
    id: 10003,
    message: '无法检测到人脸'
  },
  FaceNotFound: {
    id: 10004,
    message: '该人不存在该人脸库中'
  }
});
