const socket = io();

socket.on('update-tokens', (tokens) => {
  for (let i = 1; i <= 8; i++) {
    const el = document.getElementById(`t${i}`);
    if (el && tokens[`t${i}`] !== undefined) {
      el.textContent = tokens[`t${i}`] || "-";
    }
  }
});
