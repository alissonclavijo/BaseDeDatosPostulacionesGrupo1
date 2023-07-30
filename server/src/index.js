const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const router = require("./routes/usuarioroutes");
const solicitud = require("./routes/solicitud");
const rechum = require("./routes/rechumroutes");
const personal_academico = require("./routes/personal_academicoroutes");
const campo_amplio = require("./routes/campo_amplioroutes");
const actividad = require("./routes/actividadRoutes");
const postulacion = require("./routes/postulacionRoutes");
const titulo_exp = require("./routes/titulo_exproutes");
const sede = require("./routes/sederoutes");
const campo_especifico = require("./routes/campo_especificoRoutes");
const contratacion = require("./routes/contratacionRoutes");
const departamento = require("./routes/departamentoRoutes");
const item = require("./routes/itemRoutes");
const requisito = require("./routes/requisitoRoutes");
const oferta = require("./routes/ofertaRoutes");

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

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen(3000)
console.log("Servidor en el puerto 3000")
