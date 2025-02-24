require('dotenv/config');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const PORT = process.env.PORT || 8080;

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

io.on('connection', client => {
    client.on('new-user', (username, chatRoomName, chatRoomPassword) => {
        // NOTE: for now we will ignore chat rooms

        console.log("[INFO-Socket] User with username:", username, "connected to the chat");
        io.emit('new-user', username);
    });

    client.on('send-new-message', (fromUsername, message) => {
        console.log("Primeljna poruka od", fromUsername, message);
        client.broadcast.emit('new-message', fromUsername, message);
    });
});

server.listen(PORT, () => {
    console.log(`[INFO] Server is running on port ${PORT}`);
})
