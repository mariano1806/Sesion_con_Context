const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API de autenticación funcionando");
});

module.exports = app;
