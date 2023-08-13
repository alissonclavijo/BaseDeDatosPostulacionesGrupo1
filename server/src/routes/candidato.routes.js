const express = require('express');
const router = express.Router();

const candidatoController = require('../controllers/candidato.controller');

// Ruta para obtener todos los candidatos
router.get('/candidatos', candidatoController.getAllCandidatos);

// Ruta para obtener candidato por cédula
router.get('/candidatos/:cedula', candidatoController.getCandidatoByCedula);

// Ruta para obtener un candidato por su ID
router.get('/candidatos/:id', candidatoController.getCandidatoById);

// Ruta para obtener candidato por correo electrónico
router.get('/candidatos/porcorreo/:correo', candidatoController.getCandidatoByCorreo);

// Ruta para registrar un nuevo candidato
router.post('/candidatos', candidatoController.createCandidato);

// Ruta para actualizar un candidato por su ID
router.put('/candidatos/:id', candidatoController.updateCandidato);

// Ruta para eliminar un candidato por su ID
router.delete('/candidatos/:id', candidatoController.deleteCandidato);


module.exports = router;
