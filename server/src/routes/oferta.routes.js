const express = require('express');
const router = express.Router();
const ofertaController = require('../controllers/oferta.controller');

router.get('/ofertas', ofertaController.getAllOfertas);
router.post('/ofertas', ofertaController.createOferta);
router.get('/ofertas/:ofe_id', ofertaController.getOfertaById);
router.put('/ofertas/:ofe_id', ofertaController.updateOferta);
router.delete('/ofertas/:ofe_id', ofertaController.deleteOferta);
router.get('/ofertas/:sede_id,dept_id,ca_id,ce_id', ofertaController.getOfertaByParams);

module.exports = router;
