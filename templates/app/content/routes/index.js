'use strict';

const kexpress = require('kexpress');
const Router = kexpress.core.router.Router;
{{#for modules}}
const {{name}}Router = require('./{{moduleFile}}').router;
{{/for}}

const router = new Router({
  name: '{{name}}',
  description: '{{{description}}}'
});

{{#for modules}}
router.use('{{{path}}}', {{name}}Router);
{{/for}}

module.exports = {
  router: router
};
