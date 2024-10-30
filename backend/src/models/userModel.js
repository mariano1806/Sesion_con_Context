// Array de usuarios (simulando una base de datos)
const users = [
  {
    id: 1,
    name: "Usuario de Prueba",
    email: "test@example.com",
    password: "password123",
  },
  { id: 2, name: "Ana García", email: "ana@example.com", password: "ana123" },
  {
    id: 3,
    name: "Carlos López",
    email: "carlos@example.com",
    password: "carlos123",
  },
];

exports.findUserByEmail = (email) => {
  return users.find((user) => user.email === email);
};
