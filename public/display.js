const socket = io('http://localhost:3000'); // Use your IP on LAN

socket.on('updateRoomNumbers', ({ room1, room2 }) => {
  const room1Tokens = document.querySelectorAll('#room1 span');
  const room2Tokens = document.querySelectorAll('#room2 span');

  room1.forEach((num, i) => room1Tokens[i].textContent = num);
  room2.forEach((num, i) => room2Tokens[i].textContent = num);
});
