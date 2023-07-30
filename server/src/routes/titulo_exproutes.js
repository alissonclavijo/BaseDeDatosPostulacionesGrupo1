const express = require('express');
const router = express.Router();
const tituloExpController = require('../controllers/titulo_exp');

// Obtener todos los títulos de experiencia
router.get('/titulos_exp', tituloExpController.getAllTitulosExp);

// Crear un nuevo título de experiencia
router.post('/titulos_exp', tituloExpController.createTituloExp);

// Obtener un título de experiencia por su ID
router.get('/titulos_exp/:tx_id', tituloExpController.getTituloExpById);

// Actualizar un título de experiencia por su ID
router.put('/titulos_exp/:tx_id', tituloExpController.updateTituloExp);

// Eliminar un título de experiencia por su ID
router.delete('/titulos_exp/:tx_id', tituloExpController.deleteTituloExp);

module.exports = router;
