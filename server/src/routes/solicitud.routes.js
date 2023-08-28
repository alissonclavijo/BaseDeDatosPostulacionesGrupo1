const express = require('express');
const router = express.Router();
const solicitudController = require('../controllers/solicitud.controller');

router.get('/solicitudes', solicitudController.getAllSolicitudes);
router.post('/solicitudes', solicitudController.createSolicitud);
router.get('/solicitudes/:cand_id/:sol_id', solicitudController.getSolicitudByIds);
router.put('/solicitudes/:cand_id', solicitudController.updateNotaFinal_EstadoSolicitud);
router.delete('/solicitudes/:cand_id/:sol_id', solicitudController.deleteSolicitud);

module.exports = router;
