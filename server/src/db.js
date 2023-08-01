const { Pool } = require('pg');
const {db} = require('./config');
const mongoose = require('mongoose');
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    password:'admin',
    host: 'localhost',
    port: 5432,
    database:'SistemaPostulacion',
    //database:'SistemaPostulacion_nuevo'

})
console.log(db);
module.exports = pool;

mongoose.Promise = global.Promise;
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Conexion a mongodb exitosa!');
}).catch((error) => {
    console.log(error);
});