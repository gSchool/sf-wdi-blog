const cors = require('cors');
const jsonServer = require('json-server');
const libfs = require('fs');

const port = process.env.PORT || 5000;

const server = jsonServer.create();
const middlewares = jsonServer.defaults({ noCors: true });

if (!libfs.existsSync('./db.json')) {
  console.log('Initializing database...');
  libfs.writeFileSync('./db.json', JSON.stringify(require('./initial-db.json')));
}

const router = jsonServer.router('./db.json');

console.log('Database loaded');

server.use(cors(false));
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
