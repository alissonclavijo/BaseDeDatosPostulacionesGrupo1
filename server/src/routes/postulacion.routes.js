const express = require('express');
const router = express.Router();
const postulacionController = require('../controllers/postulacion.controller');

router.get('/postulaciones', postulacionController.getAllPostulaciones);
router.get('/postulacionesNombre', postulacionController.getPostulacionesNombre);
router.post('/postulaciones', postulacionController.createPostulacion);
router.get('/postulaciones/:post_id', postulacionController.getPostulacionById);
router.put('/postulaciones/:post_id', postulacionController.updatePostulacion);
router.delete('/postulaciones/:post_id', postulacionController.deletePostulacion);

module.exports = router;
