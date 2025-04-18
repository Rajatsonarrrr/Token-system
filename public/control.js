const socket = io();
const form = document.getElementById('token-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const tokens = {
    'r1-1': document.getElementById('r1-1').value,
    'r1-2': document.getElementById('r1-2').value,
    'r1-3': document.getElementById('r1-3').value,
    'r2-1': document.getElementById('r2-1').value,
    'r2-2': document.getElementById('r2-2').value,
    'r2-3': document.getElementById('r2-3').value,
  };
  socket.emit('update-tokens', tokens);
});
