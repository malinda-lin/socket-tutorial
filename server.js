const express = require('express');
const socketio = require('socket.io');

const app = express();

const clientPath = `${__dirname}`;
app.use(express.static(clientPath));

app.get('/', (req, res) => {
  res.sendFile(`${clientPath}/index.html`);
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

/* initiates socket on server side */
const io = socketio(server);

io.on('connection', socket => {
  // any code here will run upon the 'connection' event
  console.log(`user: ${socket.id} connected`);

  /* Add your listeners here! */
  /* Add your listeners here! */

  // create a listener using socket.on(eventName, callback)
  socket.on('example', data => {
    const newData = `${data}, all connected clients should get this alert`;
    // io.emit triggers listeners for all connected clients
    io.emit('clientSocketName', newData);
  });

  // another example with a built-in event called 'disconnect'
  socket.on('disconnect', () => {
    // 'socket.broadcast.emit' triggers event called 'logged off' on client side and sends to all connected clients except sender client
    socket.broadcast.emit('logged off', `user: ${socket.id} disconnected`);
  });
});
