'use strict';

module.exports = {
  resave: true,
  secret: '{{{project.session.secret}}}',
  key: '{{project.name}}-sid',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30
  },
  saveUninitialized: true,
  store: {
    type: 'mongodb',
    db: '{{project.name}}-session',
    host: '127.0.0.1',
    port: 27017,
    options: {
      ttl: 14 * 24 * 60 * 60,
      autoRemove: 'interval',
      autoRemoveInterval: 10
    }
  }
};
