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
        // io.emit('message', {
        //     msg: 'User left',
        //     id: 0,
        //     name: 'Chatbot',
        //     active: false
        // });
    });

    //When sending chat message
    socket.on('chatMsg', (message) => {
        io.emit('message', message);
    });
});

const PORT = 4411;
server.listen(PORT, () => {
    console.log('JS server running');
});