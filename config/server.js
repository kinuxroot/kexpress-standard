// const privateKey  = fs.readFileSync('/path/to/private.pem', 'utf8');
// const certificate = fs.readFileSync('/path/to/file.crt', 'utf8');
// const credentials = {
//   key: privateKey,
//   cert: certificate
// };

module.exports = {
  tutor: {
    host: '127.0.0.1',
    port: 8080,
    // https: true,
    // credentials: credentials
  }
};
