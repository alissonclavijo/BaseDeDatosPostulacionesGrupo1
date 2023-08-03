const { Pool } = require('pg');
const {db} = require('./config');
const mongoose = require('mongoose');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD ,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    
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