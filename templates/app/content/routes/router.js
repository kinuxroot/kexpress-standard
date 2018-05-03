'use strict';

const kexpress = require('kexpress');
const Router = kexpress.core.router.Router;
const actions = require('../actions/{{moduleFile}}');

const router = new Router({
  name: '{{name}}',
  description: '{{description}}'
});

{{#for actions}}
router.{{method}}('{{{path}}}', actions.{{actionName}});
{{/for}}

module.exports = {
  router
};
