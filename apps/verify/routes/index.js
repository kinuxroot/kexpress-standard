'use strict';

const kexpress = require('kexpress');
const Router = kexpress.core.router.Router;
const faceActions = require('../actions/face');

const router = new Router({
  name: 'verify',
  description: '静态验证接口'
});

router.post('/face/detect', faceActions.actionDetectFace);

module.exports = {
  router: router
};
