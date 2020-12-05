const jsonServer = require('json-server');
const routes = require('./routes.json');
const auth = require('./auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(auth);
server.use(jsonServer.rewriter(routes));
server.use(router);

server.listen(port);