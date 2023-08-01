
const pool = require('./src/db.js');
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const router = require("./src/routes/usuarioroutes.js");
const solicitud = require("./src/routes/solicitud.js");
const rechum = require("./src/routes/rechumroutes.js");
const personal_academico = require("./src/routes/personal_academicoroutes.js");
const campo_amplio = require("./src/routes/campo_amplioroutes.js");
const actividad = require("./src/routes/actividadRoutes.js");
const postulacion = require("./src/routes/postulacionRoutes.js");
const titulo_exp = require("./src/routes/titulo_exproutes.js");
const sede = require("./src/routes/sederoutes.js");
const campo_especifico = require("./src/routes/campo_especificoRoutes.js");
const contratacion = require("./src/routes/contratacionRoutes.js");
const departamento = require("./src/routes/departamentoRoutes.js");
const item = require("./src/routes/itemRoutes.js");
const requisito = require("./src/routes/requisitoRoutes.js");
const oferta = require("./src/routes/ofertaRoutes.js");
const informacion = require("./src/routes/informacionRoutes.js");

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
app.use("/informacion",informacion)

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

app.listen(5000)
console.log("Servidor en el puerto 5000")
