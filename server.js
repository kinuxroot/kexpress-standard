const kexpress = require('kexpress');
const serverConfig = require('./config/server');
const Server = kexpress.core.server.Server;
const TutorApplication = require('./apps/tutor/app').Application;

const server = new Server(TutorApplication, serverConfig.tutor);

server.start();
