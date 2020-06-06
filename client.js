// initiates socket on client side
const socket = io();

const exampleEvent = () => {
  // socket.emit triggers the 'example action' on the server side
  socket.emit('example action', 'any data type');
};

exampleEvent();

// Add your socket listeners here!

socket.on('someEventName', data => {
  // do something with data or anything else you'd like!
});

socket.on('logged off', msg => {
  // any code here will execute when this socket is triggered
  // example, I could create a <p> tag with innerText containing the msg and append it to my <div id='app'>
  const child = document.createElement('p');
  const parent = document.getElementById('app');
  child.innerText = msg;
  parent.appendChild(child);
});
