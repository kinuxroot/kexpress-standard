'use strict';

module.exports = {
  resave: true,
  secret: 'oBsZLxHa6qhb1nMz',
  key: 'recognize-api-1',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30
  },
  saveUninitialized: true,
  store: {
    type: 'mongodb',
    db: 'recognize-api-session',
    host: '127.0.0.1',
    port: 27017,
    options: {
      ttl: 14 * 24 * 60 * 60,
      autoRemove: 'interval',
      autoRemoveInterval: 10
    }
  }
};
