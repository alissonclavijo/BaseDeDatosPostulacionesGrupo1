const express = require("express");
const bodyParser = require("body-parser");
const port = 5000;
const fs = require("fs");
const pdf = require("pdf-page-counter");
const PDF = require("./docs");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const pool = require('./src/db.js');
const cors = require("cors");
const morgan = require("morgan");

const router = require("./src/routes/candidato.routes.js");
const solicitud = require("./src/routes/solicitud.routes.js");
const rechum = require("./src/routes/rechum.routes.js");
const personal_academico = require("./src/routes/personal_academico.routes.js");
const campo_amplio = require("./src/routes/campo_amplio.routes.js");
const actividad = require("./src/routes/actividad.routes.js");
const postulacion = require("./src/routes/postulacion.routes.js");
const titulo_exp = require("./src/routes/titulo_exproutes.routes.js");
const sede = require("./src/routes/sede.routes.js");
const campo_especifico = require("./src/routes/campo_especifico.routes.js");
const contratacion = require("./src/routes/contratacion.routes.js");
const departamento = require("./src/routes/departamento.routes.js");
const item = require("./src/routes/item.routes.js");
const requisito = require("./src/routes/requisito.routes.js");
const oferta = require("./src/routes/oferta.routes.js");
const informacion = require("./src/routes/informacion.routes.js");
const mail = require("./src/routes/mailer.routes.js");

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use(router);
app.use(solicitud)
app.use(rechum)
app.use(personal_academico)
app.use(campo_amplio)
app.use(actividad)
app.use(postulacion)
app.use(titulo_exp)
app.use(sede)
app.use(campo_especifico)
app.use(contratacion)
app.use(departamento)
app.use(item)
app.use(requisito)
app.use(oferta)
app.use(informacion)
app.use(mail)

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

//Comprobación de conexión de la base de datos
pool.connect((err) => {
  if (err) {
    console.error(
      "Error en la conexión a la base de datos, error numero:",
      err
    );
    return;
  }
  console.log("Conexion a postgresdb exitosa!");
});

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: uploadDir, // Destination folder to save the files
  filename: (req, file, cb) => {
    // Generate a unique filename using Date.now() and the original file's extension
    
    const uniqueFilename = `${Date.now()}-${path.extname(file.originalname)}`;
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage: storage });
app.use(express.json());

// Endpoint for file upload
app.post('/api/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const { cand_id, tipoDocumento } = req.body;
  const dataBuffer = fs.readFileSync(req.file.path);

  // Extract the timestamp and extension from the unique filename
  const uniqueFilename = req.file.filename;
  const [timestamp, extension] = uniqueFilename.split('-');

  // Generate serialNumber from the extracted timestamp
  const serialNumber = parseInt(timestamp);

  /*const serialNumber = await PDF.countDocuments({ cand_id }) + 1;*/
  const id_documento = `${serialNumber}-.pdf`;

  const doc = new PDF({
    cand_id,
    id_documento,
    tipoDocumento,
    pdfPath: req.file.path,
  });

  await doc.save();

  pdf(dataBuffer)
    .then(function (data) {
      const numPages = data.numpages;
      console.log('Number of pages:', numPages);
      res.json({
        url: req.file.path,
        numPages,
        extension: 'pdf',
        id: doc._id,
      });
    })
    .catch(function (error) {
      console.error('Error reading PDF file:', error);
      res.status(500).json({ error: 'Error reading PDF file' });
    });
});

app.get('/pdfs', async (req, res) => {
  try {
    const pdfDocs = await PDF.find({}, '-pdfPath'); // Excluimos el campo pdfPath

    if (!pdfDocs || pdfDocs.length === 0) {
      return res.status(404).json({ message: 'No PDFs found' });
    }

    res.status(200).json(pdfDocs);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching PDFs' });
  }
});

app.get('/pdfs/cand_id/:cand_id', async (req, res) => {
  try {
    const { cand_id } = req.params;
    const pdfDocs = await PDF.find({ cand_id });

    if (pdfDocs.length === 0) {
      return res.status(404).json({ message: 'No PDFs found for the specified cand_id' });
    }

    res.status(200).json(pdfDocs);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching PDFs' });
  }
});

app.get('/pdfs/id_documento/:id_documento', async (req, res) => {
  try {
    const { id_documento } = req.params;
    const pdfDoc = await PDF.findOne({ id_documento });

    if (!pdfDoc) {
      return res.status(404).json({ message: 'PDF not found for the specified id_documento' });
    }

    res.status(200).json(pdfDoc);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching PDF' });
  }
});

app.get('/pdfs/:cand_id/:id_documento', async (req, res) => {
  try {
    const { cand_id, id_documento } = req.params;
    const pdfDoc = await PDF.findOne({ cand_id, id_documento });

    if (!pdfDoc) {
      return res.status(404).json({ message: 'PDF not found' });
    }

    const pdfPath = pdfDoc.pdfPath; // Ruta del archivo PDF guardado
    const pdfStream = fs.createReadStream(pdfPath);

    res.setHeader('Content-Type', 'application/pdf');
    pdfStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching PDF' });
  }
});


app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//email
console.log("smtp email listo !")

app.listen(5000)
console.log("Servidor en el puerto 5000")
