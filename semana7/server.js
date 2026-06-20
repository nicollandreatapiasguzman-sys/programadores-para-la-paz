const express = require('express');
const app = express();

app.use(express.json());

// Arreglo en memoria para almacenar los reportes de manera temporal
let reportes = [];

// Ruta GET para listar todos los reportes comunitarios
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta POST para registrar una nueva incidencia
app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1, // Genera un ID incremental basado en el tamaño de la lista
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte); // Guarda el objeto dentro del array

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

// Escuchar en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});