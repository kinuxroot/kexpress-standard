'use strict';

const amqplib = require('amqplib');
const uuid = require('uuid');

class RPCBroker {
  constructor(loggers) {
    this._connection = null;
    this._channel = null;
    this._procedures = new Map();
    this._loggers = loggers;
  }

  async getChannel(options) {
    if ( !options ) {
      return this._channel;
    }

    if ( this._connection ) {
      return this._channel;
    }

    this._connection = await amqplib.connect(options.uri);
    this._channel = await this._connection.createChannel();

    const procedureKeys = Object.keys(options.procedures);
    const procedureNames = procedureKeys.map(key => options.procedures[key]);
    for ( const procedureName of procedureNames ) {
      await this._registerProcedure(procedureName);
    }

    return this._channel;
  }

  call(options, procedureName, arg, task) {
    return this.getChannel(options)
    .then(channel => {
      return new Promise(resolve => {
        if ( !task ) {
          task = uuid.v4();
        }
        arg.task = String(task);

        const procedure = this._procedures.get(procedureName);
        procedure.requests.set(arg.task, message => {
          const object = JSON.parse(message.content);

          resolve(object);
        });

        this._loggers.info.info(`Publish message to: ${procedureName}`);
        channel.publish(procedureName, 'request', Buffer.from(JSON.stringify(arg)));
      });
    });
  }

  async _registerProcedure(procedureName) {
    this._loggers.info.info(`Register RPC procedure: ${procedureName}`);
    const exchange = await this._channel.assertExchange(procedureName, 'topic');

    this._procedures.set(procedureName, {
      name: procedureName,
      exchange: exchange,
      requests: new Map()
    });

    const requestName = `${procedureName}.request`;
    const responseName = `${procedureName}.response`;
    const requestQueue = await this._channel.assertQueue(requestName);
    const responseQueue = await this._channel.assertQueue(responseName);
    await this._channel.bindQueue(requestQueue.queue, procedureName, 'request');
    await this._channel.bindQueue(responseQueue.queue, procedureName, 'response');

    this._channel.consume(responseName, msg => {
      if ( msg ) {
        const responseJson = msg.content.toString();
        const response = JSON.parse(responseJson);
        this._channel.ack(msg);

        const taskId = response.task;
        const procedure = this._procedures.get(procedureName);
        const callback = procedure.requests.get(taskId);

        if ( !callback ) {
          this._loggers.info.warn(`Ignore untracked task: ${taskId}`);

          return;
        }

        callback(msg);
      }
    });
  }
}

module.exports = {
  RPCBroker
};
