// actividadRoutes.js

const express = require('express');
const router = express.Router();
const actividadController = require('../controllers/actividad');

// Rutas
router.get('/actividad', actividadController.getAllActividades);
router.post('/actividad', actividadController.createActividad);
router.put('/actividad/:act_id', actividadController.updateActividad);
router.delete('/actividad/:act_id', actividadController.deleteActividad);

module.exports = router;
