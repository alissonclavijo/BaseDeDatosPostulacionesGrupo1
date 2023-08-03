
const pool = require('./src/db.js');
const express = require("express");
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
app.use("/informacion",informacion)
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

//email
console.log("smtp email listo !")


app.listen(5000)
console.log("Servidor en el puerto 5000")
