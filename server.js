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

//Run when new user connect
io.on('connection', socket => {
    console.log('New connection');
});

const PORT = 4411;
server.listen(PORT, () => {
    console.log('JS server running');
});