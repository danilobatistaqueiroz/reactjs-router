const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'products.json'))
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow any origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use(router)

const PORT = 8000
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})