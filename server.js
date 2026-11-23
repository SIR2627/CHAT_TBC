const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('static'));

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('mensagem', (message) => {
    console.log('mensagem recebida:', message);
    io.emit('mensagemchat', message);
  });
});

app.get('/ola', (req, res) => {
  res.send('Olá, mundo!');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

