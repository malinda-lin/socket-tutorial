/* eslint-disable global-require */
const express = require('express');
const socketio = require('socket.io');
const path = require('path');
const {green} = require('chalk');

const app = express();
const PORT = process.env.PORT || 5000;

const createApp = () => {
  // makes public files available
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // serves html file
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });
};

const startListening = () => {
  // starts server
  const server = app.listen(PORT, () => {
    console.log(green(`[app] listening on port ${PORT}`));
  });

  const io = socketio(server);
  require('./socket')(io);
};

const bootApp = async () => {
  await createApp();
  await startListening();
};

bootApp();

module.exports = app;
