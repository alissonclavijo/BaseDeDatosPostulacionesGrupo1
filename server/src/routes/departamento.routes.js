const express = require('express');
const router = express.Router();
const departamentoController = require('../controllers/departamento.controller');

router.get('/departamentos', departamentoController.getAllDepartamentos);
router.post('/departamentos', departamentoController.createDepartamento);
router.get('/departamentos/:dept_id', departamentoController.getDepartamentoById);
router.put('/departamentos/:dept_id', departamentoController.updateDepartamento);
router.delete('/departamentos/:dept_id', departamentoController.deleteDepartamento);

module.exports = router;
