const express = require('express');
const router = express.Router();
const contratacionController = require('../controllers/contratacion.controller');

router.get('/contrataciones', contratacionController.getAllContrataciones);
router.post('/contrataciones', contratacionController.createContratacion);
router.get('/contrataciones/:con_id', contratacionController.getContratacionById);
router.put('/contrataciones/:con_id', contratacionController.updateContratacion);
router.delete('/contrataciones/:con_id', contratacionController.deleteContratacion);

module.exports = router;
