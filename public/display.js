const socket = io();

socket.on('update-tokens', (data) => {
  Object.keys(data).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = data[id];
  });
});
