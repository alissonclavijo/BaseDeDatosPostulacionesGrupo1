const express = require('express');
const { gfs, upload } = require('../controllers/informacion.controller');

const router = express.Router();

// Endpoint para subir archivos
router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'Archivo subido exitosamente.' });
});

//Endpoint obtener todos los archivos
/*
router.get('/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }
      // Files exist
      return res.json(files);
    });
  });*/
  
  router.get('/files', async (req, res) => {
    try {
      const file = await gfs.files.list();
      // Check if files
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: 'No files exist'
        });
      }
      // Files exist
      return res.json(files);
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor, intenta de nuevo más tarde.' });
    }
  });

// Endpoint para obtener el archivo por nombre
/*router.get('/files/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    // File exists
    return res.json(file);
  });
});*/
router.get("/files/:filename", (req, res, next) => {
  const filename = req.params.filename;
  console.log(filename);

  gfs.files.findOne({ filename }, (err, file) => {
    if (err) {
      console.error("Error retrieving file:", err);
      return res.status(500).json({ error: "Error retrieving file" });
    }

    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    const readStream = gfs.createReadStream({ filename });
    readStream.on("error", (err) => {
      console.error("Error reading file stream:", err);
      res.status(500).json({ error: "Error reading file stream" });
    });
    readStream.pipe(res);
  });
});
// Endpoint para eliminar un archivo por nombre
router.delete('/files/:filename',  (req, res) => {
  gfs.remove({ filename: req.params.filename, root: 'uploads' }, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ message: 'Archivo no encontrado.' });
    }
    res.json({ message: 'Archivo eliminado exitosamente.' });
  });
});

module.exports = router;
