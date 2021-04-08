const express = require('express');
const socket = require('socket.io');

const app = express();

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000);

const io = socket(expressServer);

io.on('connection', (socket) => {
  socket.emit('messageFromServer', { dataFromServer: 'Hello from Server' });

  socket.on('newMessageToServer', (data) => {
    io.emit('messageToClients', { text: data.text });
  });
  
});

io.of('/admin').on('connect', (socket) => {
  socket.emit('messageFromAdmin', 'HI from admin');
});
