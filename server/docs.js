const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB ');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const pdfSchema = new mongoose.Schema({

  cand_id: {
    type: String,
    required: true,
  },
  id_documento: {
    type: String,
    required: true,
  },
  tipoDocumento: {
    type: String,
    required: true,
  },
  pdfPath: {
    type: String,
    required: true,
  }
});

const PDF = mongoose.model('PDF', pdfSchema);

module.exports = PDF;
