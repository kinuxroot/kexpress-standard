const storeConfig = require('./config/store');

const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const kexpress = require('kexpress');

const StoreManager = require('kexpress-store').StoreManager;
const UniqueModelStore = require('kexpress-store-um').UniqueModelStore;
const MongoSession = require('unique-model-mongodb').Session;

const userRouter = require('./routes/user').router;

class Application extends kexpress.core.app.Application {
  constructor() {
    super({
      baseUrl: '/v1'
    });
  }

  // Override
  async prepare() {
    const session = kexpress.middlewares.session;
    const watcher = kexpress.middlewares.access.watcher;
    const firefoxHttpRequesterFixer = kexpress.middlewares['ff-http-fixer'].firefoxHttpRequesterFixer;
    const RequestChecker = require('kexpress-http').RequestChecker;
    const FieldsCheckerErrorHandler = require('./prehandlers/fields').errorHandler;

    this.use(firefoxHttpRequesterFixer());
    this.use(session.getSession({
      db: 'sample_session',
      host: '127.0.0.1',
      port: 27017,
      options: {
        // user: 'user',
        // pass: '123456'
      }
    }));
    this.use(express.static(path.join(__dirname, 'public')));
    this.use(watcher);
    this.use(bodyParser.json());
    this.use(bodyParser.urlencoded({
      extended: true
    }));

    this.prehandle('request', new RequestChecker(FieldsCheckerErrorHandler));
    this.prehandle('store', new StoreManager({
      stores: {
        default: new UniqueModelStore({
          backend: MongoSession,
          uri: storeConfig.default.uri
        })
      }
    }));

    this.use('/v1/user', userRouter);
  }
}

module.exports = {
  Application: Application
};
