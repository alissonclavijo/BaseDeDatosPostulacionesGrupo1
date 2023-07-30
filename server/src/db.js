const { Pool } = require('pg');
const {db} = require('./config');

const pool = new Pool({
    user: 'postgres',
    password:'password',
    host: 'localhost',
    port: 5432,
    database:'SistemaPostulacion',
})
console.log(db);
module.exports = pool;

