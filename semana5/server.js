const express = require('express');
const app = express();

// Permitir que el servidor entienda datos en formato JSON (necesario para el POST)
app.use(express.json());

// Ruta principal (GET)
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Ruta de saludo comunitario (GET)
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Ruta dinámica con parámetro de nombre (GET)
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// Ruta para recibir reportes (POST)
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

// Encender el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});