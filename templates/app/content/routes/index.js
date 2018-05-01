'use strict';

const kexpress = require('kexpress');
const Router = kexpress.core.router.Router;
{{#for modules}}
const {{name}}Actions = require('../actions/{{moduleFile}}');
{{/for}}

const router = new Router({
  name: '{{name}}',
  description: '{{description}}'
});

{{#for modules}}
{{#for actions}}
router.{{method}}('{{{modulePath}}}{{{path}}}', {{moduleName}}Actions.{{actionName}});
{{/for}}
{{/for}}

module.exports = {
  router: router
};
