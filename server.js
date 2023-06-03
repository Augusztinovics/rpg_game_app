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
const playerGroups = [];

const GameIo = io.of(/^\/Game-\d+$/);

//Run when new user connect
io.on('connection', socket => {

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

    socket.on('CharacterChangedEvent', msg => {
        socket.to(room).emit('CharacterChanged', msg);
    });
    socket.on('GameStateChange', state => {
        socket.to(room).emit('GameActiveChanged', state);
    });
    socket.on('ActiveSeeneChanged', order => {
        socket.to(room).emit('ChangedActiveSeene', order);
    });
    socket.on('DrowCanvas', line => {
        socket.to(room).emit('OnCanvasDrow', line);
    });
    socket.on('ReloadActiveSeeneData', () => {
        socket.to(room).emit('OnReloadActiveSeeneData');
    });
    socket.on('PlayerJoin', (playerName) => {
        let newPlayer = {
            id: socket.id,
            name: playerName,
            roomId: room,
            voice: false,
        };
        playerGroups.push(newPlayer);
        let playersInRoom = playerGroups.filter(p => p.roomId == room);
        GameIo.to(room).emit('PlayerJoined', playersInRoom);
        if (playerName == 'KM') {
            socket.to(room).emit('GameActiveChanged', true);
        }
    });
    socket.on('disconnect', () => {
        let leftingPlayer = playerGroups.findIndex(p => p.id == socket.id);
        if (leftingPlayer >= 0) {
            if (playerGroups[leftingPlayer].name == 'KM') {
                socket.to(room).emit('GameActiveChanged', false);
            }
            playerGroups.splice(leftingPlayer, 1);
            let playersInRoom = playerGroups.filter(p => p.roomId == room);
            socket.to(room).emit('PlayerJoined', playersInRoom);
        }
    });
    socket.on("voice", (data) => {
        socket.to(room).emit('AudioMessage', {user: socket.id, sound: data});
    });
});

const PORT = 4411;
server.listen(PORT, () => {
    console.log('JS server running');
});