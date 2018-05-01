'use strict';

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
