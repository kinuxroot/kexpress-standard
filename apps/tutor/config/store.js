const params = {
  default: {
    host: 'localhost',
    port: 27017,
    db: 'tutor',
    user: '',
    password: ''
  }
};

function makeMongoUri(options) {
  return `mongodb://${options.user}:${options.password}@${options.host}:${options.port}/${options.db}`;
}

module.exports = {
  default: {
    uri: makeMongoUri(params.default)
  }
};
