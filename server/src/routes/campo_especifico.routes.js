const express = require('express');
const router = express.Router();
const campoEspecificoController = require('../controllers/campo_especifico.controller');

router.get('/campo_especifico', campoEspecificoController.getAllCampoEspecifico);
router.post('/campo_especifico', campoEspecificoController.createCampoEspecifico);
router.get('/campo_especifico/:ce_id', campoEspecificoController.getCampoEspecificoById);
router.put('/campo_especifico/:ce_id', campoEspecificoController.updateCampoEspecifico);
router.delete('/campo_especifico/:ce_id', campoEspecificoController.deleteCampoEspecifico);

module.exports = router;
