const socket = io();
const form = document.getElementById('token-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const tokens = {
    t1: document.getElementById('t1').value,
    t2: document.getElementById('t2').value,
    t3: document.getElementById('t3').value,
    t4: document.getElementById('t4').value,
    t5: document.getElementById('t5').value,
    t6: document.getElementById('t6').value,
    t7: document.getElementById('t7').value,
    t8: document.getElementById('t8').value,
  };

  socket.emit('update-tokens', tokens);
});
