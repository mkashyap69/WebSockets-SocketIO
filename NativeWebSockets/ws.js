const http = require('http');
const ws = require('ws');

const server = http.createServer((req, res) => {
  res.end('I am connected');
});

const webSocketServer = new ws.Server({ server });

webSocketServer.on('connection', (ws, req) => {
  ws.send('Hi from the server');
});

server.listen(8000);
