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


