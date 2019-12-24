require('dotenv/config');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());


io.on('connection', socket => {
    console.log("User is connected");
});

server.listen(PORT, () => {
    console.log(`[INFO] Server is running on port ${PORT}`);
})
