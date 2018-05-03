'use strict';

{{#if errors}}
{{#if errors.length}}
const {
{{#for errors}}
  {{name}},
{{/for}}
} = require('../config/errors');
{{/if}}
{{/if}}

module.exports = {
{{#for actions}}
  {{actionName}}: {
    request: {{{specCode.request}}},
    response: {{{specCode.response}}},
    store: {
      default: {
      }
    }
  },
{{/for}}
};
