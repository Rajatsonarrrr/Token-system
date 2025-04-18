const socket = io('http://localhost:3000'); // Change to your IP if needed

function updateRoom(room) {
  let data = {};

  if (room === 1) {
    data.room1 = [
      document.getElementById('r1n1').value || "0",
      document.getElementById('r1n2').value || "0",
      document.getElementById('r1n3').value || "0"
    ];
    data.room2 = null;
  } else {
    data.room2 = [
      document.getElementById('r2n1').value || "0",
      document.getElementById('r2n2').value || "0",
      document.getElementById('r2n3').value || "0"
    ];
    data.room1 = null;
  }

  socket.emit('updateNumbers', data);
}
