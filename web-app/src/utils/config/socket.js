import openSocket from 'socket.io-client';
import { API_SOCKET } from '../consts/api-paths';

const socket = openSocket(API_SOCKET);

function connectToChat(username, chatRoomName, chatRoomPassword, cb) {
    // Subscribe on event that server emits as a result
    socket.on('new-user', message => cb(null, message));

    // Emit (send request to the server)
    socket.emit('new-user', username, chatRoomName, chatRoomPassword);
}

function sendMessage(usernameFrom, message) {
    socket.emit('send-new-message', usernameFrom, message);
}

function newUserArrived(cb) {
    socket.on('new-user', username => cb(null, username));
}

function newMessageArrived(cb) {
    socket.on('new-message', (usernameFrom, message) => cb(null, usernameFrom, message));
}

export { connectToChat, sendMessage, newUserArrived, newMessageArrived };
