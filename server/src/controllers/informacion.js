/*const mongoose = require('mongoose');
const multer  = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const {Grid} = require('gridfs-stream');
/*
let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
//console.log('conn.db:', conn.db);
//console.log('mongoose.mongo:', mongoose.mongo);

  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});


const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const fileInfo = {
        filename: req.body.idDocument,
        bucketName: "uploads",
        metadata: {
          idPostulation: req.body.idPostulation,
        },
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

// Cambio de "export" a "module.exports"
module.exports.uploadPdf = (req, res) => {
  upload.single("archivo")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    return res.status(201).send(req.file);
  });
};
*/
const mongoose = require('mongoose');
const multer = require('multer');
const Grid = require('gridfs-stream');
const {GridFsStorage} = require('multer-gridfs-storage');

// Mongo URI
const mongoURI = process.env.MONGO_URI;

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);  
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
    });
  }
});

const upload = multer({ storage });

module.exports = { gfs, upload };
