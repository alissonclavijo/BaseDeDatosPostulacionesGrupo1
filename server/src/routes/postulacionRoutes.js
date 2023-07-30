const express = require('express');
const router = express.Router();
const postulacionController = require('../controllers/postulacion');

router.get('/postulaciones', postulacionController.getAllPostulaciones);
router.post('/postulaciones', postulacionController.createPostulacion);
router.get('/postulaciones/:post_id', postulacionController.getPostulacionById);
router.put('/postulaciones/:post_id', postulacionController.updatePostulacion);
router.delete('/postulaciones/:post_id', postulacionController.deletePostulacion);

module.exports = router;