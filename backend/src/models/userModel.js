const users = [
  { username: "mariano", password: "mariano" },
  { username: "usuario", password: "usuario" },
  { username: "admin", password: "admin" },
];

exports.findUserByUsername = (username) => {
  return users.find((user) => user.username === username);
};
