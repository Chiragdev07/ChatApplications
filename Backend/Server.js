import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import authRoutes from "./Routes/route.auth.js";
import messageRoutes from "./Routes/message.auth.js";
import userRoutes from "./Routes/user.routes.js";
import { app, server } from "./Soket/soket.js";
import connection from "./db/connections.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "Frontend", "dist")));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);

// All other GET requests not handled before will return the frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

server.listen(PORT, () => {
  connection();
  console.log(`Server is running on port ${PORT}`);
});
