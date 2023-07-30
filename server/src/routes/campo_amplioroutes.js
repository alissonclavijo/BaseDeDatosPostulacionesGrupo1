// campoAmplioRoutes.js

const express = require('express');
const router = express.Router();
const campoAmplioController = require('../controllers/campo_amplio');

// Rutas
router.get('/campo_amplio', campoAmplioController.getAllCamposAmplios);
router.post('/campo_amplio', campoAmplioController.createCampoAmplio);

module.exports = router;
