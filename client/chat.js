const io = require('socket.io-client')
const socket = io()

const button = document.getElementById('button');
const input = document.getElementById('message');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  // socket.emit(eventName, eventObject)
  socket.emit('chat message', {
    message: input.value;
  })
  input.value = ''
});

socket.on('chat message', function(data) {
  // reset feedback innerHTML
  // feedback.innerHTML = '';
  // const today = new Date();
  output.append($('<li>').text(data));
  //  += `<p><strong> ${
  //   data.handle
  // } </strong>{<em><font size="1">${today.getHours()}:${today.getMinutes()}</font></em>} : ${
  //   data.message
  // }</p>`;
});