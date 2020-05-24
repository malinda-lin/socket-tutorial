/* eslint-disable no-console */
// connects socket with server
const {green} = require('chalk');

module.exports = io => {
  console.log('hie');
  io.on('connection', socket => {
    console.log(green(`user ${socket.id} connected`));

    socket.on('chat message', function(data) {
      io.sockets.emit('chat message', data);
    });

    socket.on('disconnect', () => {
      console.log(green(`user ${socket.id} disconnected`));
    });
  });
};