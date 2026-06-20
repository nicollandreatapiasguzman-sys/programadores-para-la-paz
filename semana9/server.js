const express = require('express');
const app = express();

// Ruta principal (Raíz)
app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando');
});

// Ruta para verificar el estado del servicio comunitario
app.get('/estado', (req, res) => {
  res.json({
    estado: "Servidor funcionando",
    servicio: "API comunitaria"
  });
});

// El servidor escucha en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});