const http = require('http');
const app = require('../app');
const server = http.createServer(app);


const port = parseInt(process.env.port) || 80;

console.log("server is listening at %s", port);
app.set('port', port);
server.listen(port);
