'use strict';

const um = require('unique-model');
const umMongo = require('unique-model-mongodb');
const kexpress = require('kexpress');
const kexpressHttp = require('kexpress-http');
const kexpressStore = require('kexpress-store');
const kexpressStoreUm = require('kexpress-store-um');

umMongo.load(um);
kexpressHttp.load(kexpress);
kexpressStore.load(kexpress);
kexpressStoreUm.load({
  kexpressStore,
  um
});

let command = process.env.KEXPRESS_COMMAND;
if ( !command ) {
  command = 'start';
}

const startupConfig = require('./app.startup');
const commandFunction = kexpress.master[command];

commandFunction(startupConfig)
.catch(e => {
  console.error(e);

  process.exit(0);
});
