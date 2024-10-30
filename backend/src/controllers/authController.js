const jwt = require("jsonwebtoken");
const { findUserByEmail } = require("../models/userModel");
const { JWT_SECRET } = require("../config/constants");

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Buscar usuario
  const user = findUserByEmail(email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  // Generar token
  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Inicio de sesión exitoso",
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
};
