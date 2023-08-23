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
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const { username, tipoDocumento } = req.body;
  const dataBuffer = fs.readFileSync(req.file.path);

  const doc = new PDF({
    username,
    tipoDocumento,
    pdfPath: req.file.path
  });

  doc.save();

  const uniqueFileName = req.file.filename;

  pdf(dataBuffer)
    .then(function (data) {
      const numPages = data.numpages;
      console.log("Number of pages:", numPages);
      res.json({ url: req.file.path, numPages }); // Return the URL of the PDF in the response
    })
    .catch(function (error) {
      console.error("Error reading PDF file:", error);
      res.status(500).json({ error: "Error reading PDF file" });
    });
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//email
console.log("smtp email listo !")

app.listen(5000)
console.log("Servidor en el puerto 5000")
