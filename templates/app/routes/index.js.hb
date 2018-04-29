'use strict';

const kexpress = require('kexpress');
const Router = kexpress.core.router.Router;
const faceSetActions = require('../actions/face-set');

const router = new Router({
  name: 'verify',
  description: '静态验证接口'
});

router.{{method}}({{url}}, {{moduleName}}Actions.{{actionName}});

module.exports = {
  router: router
};
