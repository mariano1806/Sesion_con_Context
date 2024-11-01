const app = require("./src/app");
const { PORT } = require("./src/config/constants");

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
