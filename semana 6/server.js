const express = require('express');
const app = express();

// Esto permite que el servidor entienda el formato JSON
app.use(express.json());

// 1. Ruta original (Pregunta 6)
app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

// 2. NUEVA RUTA: Aquí es donde agregas la /incidencia (Pregunta 8)
app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

// 3. El servidor se queda escuchando (Esto SIEMPRE va al final del archivo)
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});

