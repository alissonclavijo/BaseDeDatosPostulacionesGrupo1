const express = require('express');
const router = express.Router();

const informacionController = require('../controllers/informacion.js');

router.post("/upload", informacionController.uploadPdf);
module.exports = router;