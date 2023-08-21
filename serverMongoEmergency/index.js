const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const fs = require("fs");
const pdf = require("pdf-page-counter");
const PDF = require("./docs");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
