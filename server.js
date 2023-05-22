const http = require('http');
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server,{cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }});

const aktiveUsers = [];

const GameIo = io.of(/^\/Game-\d+$/);

//Run when new user connect
io.on('connection', socket => {
    console.log('Default socket connected!');

    //When disconnecting
    socket.on('disconnect', () => {
        let leftingUser = aktiveUsers.findIndex(u => u.socket_id == socket.id);
        if (leftingUser >= 0) {
            let msg = aktiveUsers[leftingUser].user_name + ' elment';
            io.emit('message', {
                msg: msg,
                id: aktiveUsers[leftingUser].user_id,
                name: 'Chatbot',
                active: false
            });
            aktiveUsers.splice(leftingUser, 1);
        }
    });

    //Gather aktive users
    socket.on('singUp', data => {
        let newUser = {
            socket_id: socket.id,
            user_id: data.id,
            user_name: data.name
        };
        aktiveUsers.push(newUser);
        let msg = data.name + ' csatlakozott';
        io.emit('message', {
            msg: msg,
            id: data.id,
            name: 'Chatbot',
            active: true
        });
    });

    //When sending chat message
    socket.on('chatMsg', (message) => {
        io.emit('message', message);
    });
    socket.on('friendUpdate', (msg) => {
        io.emit('updateFriend', 'Update');
    });
    socket.on('sendPrivateMessage', (msg) => {
        io.emit('privateMessage', msg);
    });
});

GameIo.on('connect', (socket) => {
    let room = socket.nsp.name;
    socket.join(room);
    console.log('Game socket connected! ' + socket.nsp.name);
    socket.on('CharacterChangedEvent', msg => {
        socket.to(room).emit('CharacterChanged', msg);
    });
    socket.on('GameStateChange', state => {
        socket.to(room).emit('GameActiveChanged', state);
    });
    socket.on('ActiveSeeneChanged', order => {
        socket.to(room).emit('ChangedActiveSeene', order);
    });
});

const PORT = 4411;
server.listen(PORT, () => {
    console.log('JS server running');
});