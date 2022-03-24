const http = require('http');

const routes = require('./lib/basic-app-creation/routes');

const server = http.createServer(routes.handler);

server.listen(3000);