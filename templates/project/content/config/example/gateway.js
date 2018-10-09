'use strict';

module.exports = {
  // Default value: 'nginx'
  // type: 'nginx',
  // Default value: 'http'
  // protocol: 'http',
  // Default value: false
  // nameHost: false,
  // Enabled when nameHost is true
  // Default value: _
  // serverName: '...',
  // Default value
  // host: {
  //   v4: '0.0.0.0',
  //   v6: '::'
  // },
  // Default value: 80
  // port: 80,
  root: '/home/dataee/{{project.name}}',
  // Default value: [ 'index.html', 'index.htm' ]
  // index: [
  //   'index.html', 'index.htm'
  // ],
  // Default value: []
  locations: [{
    pattern: '/socket.io/',
    proxy: {
      pass: 'http://nodes',
      httpVersion: '1.1',
      headers: {
        Upgrade: '$http_upgrade',
        Connection: 'upgrade'
      }
    }
  }]
};
