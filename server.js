const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 3000;

app.use(express.static('public'));

let room1 = ["0", "0", "0"];
let room2 = ["0", "0", "0"];

io.on('connection', (socket) => {
  console.log("Client connected");

  // Send current values on new connection
  socket.emit('updateRoomNumbers', { room1, room2 });

  socket.on('updateNumbers', (data) => {
    if (data.room1) room1 = data.room1;
    if (data.room2) room2 = data.room2;

    io.emit('updateRoomNumbers', { room1, room2 });
  });
});

http.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
