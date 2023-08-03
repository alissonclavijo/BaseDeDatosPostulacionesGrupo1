/*const express = require('express');
const router = express.Router();

const informacionController = require('../controllers/informacion.js');

router.post("/upload", informacionController.uploadPdf);
module.exports = router;*/
const express = require('express');
const { gfs, upload } = require('../controllers/informacion.controller');

const router = express.Router();

// Endpoint para subir archivos
router.post('/subir-archivo', upload.single('file'), (req, res) => {
  res.json({ message: 'Archivo subido exitosamente.' });
});

// Endpoint para obtener el archivo por nombre
router.get('/archivo/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({ message: 'Archivo no encontrado.' });
    }
    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  });
});

// Endpoint para eliminar un archivo por nombre
router.delete('/archivo/:filename', (req, res) => {
  gfs.remove({ filename: req.params.filename, root: 'uploads' }, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ message: 'Archivo no encontrado.' });
    }
    res.json({ message: 'Archivo eliminado exitosamente.' });
  });
});

module.exports = router;
