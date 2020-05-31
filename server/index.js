/* eslint-disable no-console */
/* eslint-disable global-require */
const express = require('express');
const socketio = require('socket.io');
const path = require('path');
const {green} = require('chalk');

const app = express();
const PORT = process.env.PORT || 5000;

// makes public files available
app.use(express.static(path.join(__dirname, '..', 'public')));

// serves html file
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// starts server
const server = app.listen(PORT, () => {
  console.log(green(`[app] listening on port ${PORT}`));
});
const io = socketio(server);
require('./socket')(io);

module.exports = app;
