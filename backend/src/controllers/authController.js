const jwt = require("jsonwebtoken");
const { findUserByUsername } = require("../models/userModel");
const { JWT_SECRET } = require("../config/constants");

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Buscar usuario
  const user = findUserByUsername(username);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  // Generar token
  const token = jwt.sign({ username: user.username }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({
    message: "Inicio de sesión exitoso",
    token,
    user: {
      username: user.username,
    },
  });
};
