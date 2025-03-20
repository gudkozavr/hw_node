import e from "express";
import http from "http";
import { Server } from "socket.io";
import "dotenv/config";

const PORT = process.env.PORT || 3333;

const app = e();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3333", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("new user entered chat");

  socket.on("message", (data) => {
    console.log("message from client: ", data);
    io.emit("message", data);
  });
  socket.on("disconnect", () => {
    console.log("User left the chat", socket.io);
  })
});

server.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
})
