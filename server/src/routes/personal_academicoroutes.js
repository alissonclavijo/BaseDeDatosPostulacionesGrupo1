const express = require('express');
const router = express.Router();

const personalAcademicoController = require('../controllers/personal_academico');

// Rutas para el personal académico
router.get('/personal_academico', personalAcademicoController.getAllPersonalAcademico);
router.post('/personal_academico', personalAcademicoController.createPersonalAcademico);
router.put('/personal_academico/:pa_id', personalAcademicoController.updatePersonalAcademico);
router.delete('/personal_academico/:pa_id', personalAcademicoController.deletePersonalAcademico);

module.exports = router;
