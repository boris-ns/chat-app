import openSocket from 'socket.io-client';
import { API_SOCKET } from '../consts/api-paths';

const socket = openSocket(API_SOCKET);

function connectToChat(username, chatRoomName, chatRoomPassword, cb) {
    // Subscribe on event that server emits as a result
    socket.on('success', message => cb(null, message));

    // Emit (send request to the server)
    socket.emit('new-user', username, chatRoomName, chatRoomPassword);
}

function sendMessage(usernameFrom, message, cb) {
    socket.on('new-message-received', message => cb(null, message));
    socket.emit('new-message', usernameFrom, message);
}

export { connectToChat, sendMessage };
