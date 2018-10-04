'use strict';

const kexpress = require('kexpress');
const Action = kexpress.core.action.Action;

const prehandlers = require('./{{moduleFile}}.pspec');

{{#for actions}}
const {{actionName}} = Action.Create({
  name: '{{id}}',
  summary: '{{summary}}',
  description: '{{description}}',
  prehandlers: prehandlers.{{actionName}},
  /**
  * Action handler
  * @param {express.core.Request} req - The HTTP request of express.
  * @param {express.core.Response} res - The HTTP response of express.
  * @param {kexpress.HandleContext} ctx - The context data of kexpress.
  */
  async handler(req, res) {
    res.json({
    });
  }
});

{{/for}}
module.exports = {
{{#for actions}}
  {{actionName}},
{{/for}}
};
