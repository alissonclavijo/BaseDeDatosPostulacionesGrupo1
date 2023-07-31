const { Pool } = require('pg');
const {db} = require('./config');

const pool = new Pool({
    user: 'postgres',
    password:'admin',
    host: 'localhost',
    port: 5432,
    database:'SistemaPostulacion',
})
console.log(db);
module.exports = pool;

