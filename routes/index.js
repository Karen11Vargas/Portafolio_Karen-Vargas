const express = require('express');
const router = express.Router();

// Página principal
router.get('/', (req, res) => {
  res.render('index');
});

// Página de carrera
router.get('/carrera', (req, res) => {
  res.render('carrera');
});

// Página de pasatiempos
router.get('/pasatiempos', (req, res) => {
  res.render('pasatiempos');
});

// Exportar el router para usar en la aplicación principal
module.exports = router;