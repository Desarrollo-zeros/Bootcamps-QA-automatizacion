const express = require('express');
const app = express();
const router = require('./router');

app.use(express.json()); // Middleware para parsear JSON
app.use('/api', router); // Rutas de la API

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // Exportar para pruebas
