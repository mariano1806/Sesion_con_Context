const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/constants");

exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(403)
      .json({ message: "No se proporcionó token de autenticación" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = { username: decoded.username };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};
