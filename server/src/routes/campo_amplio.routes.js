// campoAmplioRoutes.js

const express = require('express');
const router = express.Router();
const campoAmplioController = require('../controllers/campo_amplio.controller');

// Rutas
router.get('/campo_amplio', campoAmplioController.getAllCamposAmplios);
router.get('/campo_amplio/:ca_id', campoAmplioController.getCamposAmpliosById);
router.post('/campo_amplio', campoAmplioController.createCampoAmplio);

module.exports = router;
