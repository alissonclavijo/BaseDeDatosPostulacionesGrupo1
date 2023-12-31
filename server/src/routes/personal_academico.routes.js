const express = require('express');
const router = express.Router();

const personalAcademicoController = require('../controllers/personal_academico.controller');

// Rutas para el personal académico
router.get('/personal_academico', personalAcademicoController.getAllPersonalAcademico);
router.get('/personal_academico/:pa_id', personalAcademicoController.getPersonalAcademicoById);
router.post('/personal_academico', personalAcademicoController.createPersonalAcademico);
router.put('/personal_academico/:pa_id', personalAcademicoController.updatePersonalAcademico);
router.delete('/personal_academico/:pa_id', personalAcademicoController.deletePersonalAcademico);

module.exports = router;
