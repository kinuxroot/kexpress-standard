'use strict';

const bodyParser = require('body-parser');
const kexpress = require('kexpress');
const router = require('./routes').router;
const RequestChecker = require('kexpress-http').RequestChecker;
const FieldsCheckerErrorHandler = require('./prehandlers/fields').errorHandler;

const httpSession = require('kexpress/src/middlewares/http-session');
const StoreManager = require('kexpress-store').StoreManager;
const UniqueModelStore = require('kexpress-store-um').UniqueModelStore;
const MongoSession = require('unique-model-mongodb').Session;

class Application extends kexpress.core.app.Application {
  // Override
  async prepare() {
    await super.prepare();

    this.use(kexpress.middlewares.access.createWatcher(this.loggers.access));
    this.use(httpSession.createHttpSession(this.config.session));
    this.use(bodyParser.json());
    this.use(bodyParser.urlencoded({
      extended: true
    }));

    this.prehandle('request', new RequestChecker(FieldsCheckerErrorHandler));
    this.prehandle('store', new StoreManager({
      stores: {
        default: new UniqueModelStore({
          backend: MongoSession,
          uri: this._config.store.default.uri
        })
      }
    }));
  }

  // Override
  async createRouters() {
    this.use('/', router);
  }
}

module.exports = {
  Application: Application
};