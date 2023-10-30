const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('kara.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 3301;

server.listen(PORT, () => {
  console.log('JSON Server is running');
  console.log('=> http://localhost:' + PORT);
});
