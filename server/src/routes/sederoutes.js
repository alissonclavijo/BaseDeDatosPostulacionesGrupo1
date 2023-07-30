const express = require('express');
const router = express.Router();
const sedeController = require('../controllers/sede');

router.get('/sedes', sedeController.getAllSedes);
router.post('/sedes', sedeController.createSede);
router.get('/sedes/:sede_id', sedeController.getSedeById);
router.put('/sedes/:sede_id', sedeController.updateSede);
router.delete('/sedes/:sede_id', sedeController.deleteSede);

module.exports = router;
