'use strict';

const kexpress = require('kexpress');
const Action = kexpress.core.action.Action;

const errors = require('../config/errors');

const prehandlers = require('./{{moduleFile}}.pspec');

{{#for actions}}
const {{actionName}} = Action.Create({
  name: '{{id}}',
  summary: '{{summary}}',
  description: '{{description}}',
  prehandlers: prehandlers.{{actionName}},
  async handler(req, res, ctx) {
    res.json({
      data: faceSetData
    });
  }
});
{{/for}}

module.exports = {
{{#for actions}}
  {{actionName}}
{{/for}}
};
