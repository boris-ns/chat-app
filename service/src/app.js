require('dotenv/config');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());

io.on('connection', client => {
    client.on('new-user', (username, chatRoomName, chatRoomPassword) => {
        // NOTE: for now we will ignore chat rooms

        console.log("[INFO-Socket] User with username:", username, "connected to the chat");
        io.emit('success', 'You are connected');
    });

    client.on('new-message', (fromUsername, message) => {
        console.log("Primeljna poruka od", fromUsername, message);
        client.emit('new-message-received', 'Primio sam poruku')
    });
});

server.listen(PORT, () => {
    console.log(`[INFO] Server is running on port ${PORT}`);
})
