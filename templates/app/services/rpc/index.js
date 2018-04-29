'use strict';

const kexpress = require('kexpress');
const Service = kexpress.core.service.Service;
const { RPCBroker } = require('./broker');

const request = Service.Create({
  name: 'request',
  prehandlers: {
  },
  async handler(ctx, procedureName, arg, task) {
    if ( !ctx.app.rpcBroker ) {
      ctx.app.rpcBroker = new RPCBroker(ctx.app.loggers);
    }

    const rpcBroker = ctx.app.rpcBroker;
    const rpcOptions = ctx.app.config.rpc.$object();
    const result = await rpcBroker.call(rpcOptions, procedureName, arg, task);

    return result;
  }
});

module.exports = {
  request
};
