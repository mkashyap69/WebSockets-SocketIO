const socket = io('http://localhost:9000');
const socketAdmin = io('http://localhost:9000/admin');

socket.on('messageFromServer', (data) => {
  console.log(data.dataFromServer);

  socket.emit('messageToServer', { dataToServer: 'Hello from client' });
});

socketAdmin.on('messageFromAdmin', (dataFromAdmin) => {
  console.log(dataFromAdmin);
});

document.querySelector('#message-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const newMessage = document.querySelector('#user-message').value;
  socket.emit('newMessageToServer', { text: newMessage });
});
