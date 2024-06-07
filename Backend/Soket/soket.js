import { Server } from 'socket.io';
import http from 'http';
import express from 'express';
import cors from 'cors';

const app = express();
const server = http.createServer(app);

// Configure CORS middleware for Express
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"]
}));

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});


export const getReceiverSocketId=(reseverId)=>{
  return userSocketMap[reseverId];
}

const userSocketMap = {};

io.on('connection', (socket) => {
  console.log("A User Connected......", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId != "undefined"
  ) userSocketMap[userId] = socket.id;

  //io.emit is used to send event to all connected client
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {

    console.log("User Disconnected...", socket.id);

    delete userSocketMap[userId];

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
