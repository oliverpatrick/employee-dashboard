const jsonServer = require('json-server');
const bodyParser = require('body-parser');
// const jwtDecode = require('jwt-decode');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const db = require('./db.json');
const router = jsonServer.router(db);

server.use(jsonServer.bodyParser);

server.use([bodyParser.json({ type: 'application/vnd.api+json' })]);

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    users: '/users',
    employees: '/employees'
  })
);

server.use(router);

server.listen(3002, () => {
  // eslint-disable-next-line no-console
  console.log('Mock Server is running on http://localhost:3002');
});
