const PORT = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const routes = require('./routes');
const sockets = require('./sockets.js');
const io = require('socket.io')(server, {
  cors: {
    origin: true,
    methods: ['GET', 'PUT', 'POST']
  }
});

app.use(cors());
app.use('/', routes);
sockets(io);
  
server.listen(PORT, function () {
  console.log('Ready', PORT)
});