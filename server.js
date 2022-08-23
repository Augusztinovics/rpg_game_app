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

//socket.join(roomname)
//socket.broadcast.to(roomnam).emit('message', msg)

//Run when new user connect
io.on('connection', socket => {

    //welcome current user
    // socket.emit('message', {
    //     msg: 'Welcome in chat',
    //     id: 0,
    //     name: 'Chatbot'
    // });

    //Broadcast when user connect
    // socket.broadcast.emit('message', {
    //     msg: 'A user joined',
    //     id: 0,
    //     name: 'Chatbot'
    // });


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
        // io.emit('message', {
        //     msg: 'User left',
        //     id: 0,
        //     name: 'Chatbot',
        //     active: false
        // });
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
});

const PORT = 4411;
server.listen(PORT, () => {
    console.log('JS server running');
});