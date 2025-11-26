
import { createServer } from 'node:http';
import express from "express";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://chat-app-6kwf.onrender.com"   
    ],
    methods: ["GET", "POST"],
    credentials: true
  }
})

const ROOM = 'group'

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on('joinRoom', async (userName) => {
    console.log(`${userName} is joining the group.`)

    await socket.join(ROOM);

    //broadcast
    socket.to(ROOM).emit("roomNotice", userName);

  });

  socket.on('chatMessage', (msg) => {
    socket.to(ROOM).emit('chatMessage', msg);
  });

  socket.on('typing', (userName) => {
    socket.to(ROOM).emit('typing', userName);
  });

  socket.on('stopTyping', (userName) => {
    socket.to(ROOM).emit('stopTyping', userName);
  });
});

app.get('/', (req, res) => {
  res.send('<h1>Real-Time Chat App</h1>');
});

server.listen(4600, () => {
  console.log('server running at http://localhost:4600');
});