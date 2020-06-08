/* initiates socket on client side */
const socket = io();

/* add event listeners here */
const b = document.getElementById('button');

const exampleEvent = e => {
  e.preventDefault();
  // socket.emit triggers the 'example' socket on the server side
  socket.emit('example', 'pass any data type here');
};

b.addEventListener('click', exampleEvent);

/* Add your socket listeners here! */
socket.on('clientSocketName', data => {
  // any code here will execute when this socket is triggered
  alert(data);
});

socket.on('logged off', msg => {
  // any code here will execute when this socket is triggered
  // example, I could create a <p> tag with innerText containing the msg and append it to my <div id='app'>
  const child = document.createElement('p');
  const parent = document.getElementById('app');
  child.innerText = msg;
  parent.appendChild(child);
});
