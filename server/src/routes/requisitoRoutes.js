const express = require('express');
const router = express.Router();
const requisitoController = require('../controllers/requisito');

router.get('/requisitos', requisitoController.getAllRequisitos);
router.post('/requisitos', requisitoController.createRequisito);
router.get('/requisitos/:rq_id', requisitoController.getRequisitoById);
router.put('/requisitos/:rq_id', requisitoController.updateRequisito);
router.delete('/requisitos/:rq_id', requisitoController.deleteRequisito);

module.exports = router;
