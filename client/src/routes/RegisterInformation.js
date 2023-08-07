import React, { useState } from "react";
import Navbar from "../components/Navbar";
import './RegisterInformation.scss';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import TermsAndConditions from "../components/TyC";
import axios from "axios";
import espelogo from '../img/espelogo.png'

const RegisterInformation = () => {
  const location = useLocation();
  const { tipo, identidad, email } = location.state || {};
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [tituloSenecyt, setTituloSenecyt] = useState("");
  const [sexo, setSexo] = useState("");
  const [password, setPassword] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "nombreCompleto":
        setNombreCompleto(value);
        break;
      // Agregar más casos según sea necesario
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Separar el nombre y el apellido del campo "nombreCompleto"
    const [nombre1, nombre2, apellido1, ...apellidoArray] =
      nombreCompleto.split(" ");
    const apellido2 = apellidoArray.join(" ");

    const data = {
      cand_tipo_identificacion: tipo,
      cand_num_identificacion: identidad,
      cand_sexo: sexo,
      cand_titulo: tituloSenecyt,
      cand_fecha_nacimiento: fechaNacimiento,
      cand_id: 22,
      cand_correo: email,
      cand_password: password,
      cand_nombre1: nombre1 || "",
      cand_nombre2: nombre2 || "",
      cand_apellido1: apellido1 || "",
      cand_apellido2: apellido2 || "",
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/candidatos",
        data
      );
      console.log("Candidato registrado:", response.data);

      // Restablecer campos después del envío exitoso
      setNombreCompleto("");
      setTituloSenecyt("");
      setSexo("");
      setPassword("");
      setFechaNacimiento("");
      setShowAlert(true);
      setFormError({});
    } catch (error) {
      console.error("Error al registrar candidato:", error.message);
      if (error.response && error.response.data) {
        setFormError(error.response.data);
      }
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      
      <div className="main-register"><br /><br /><br /><br /><br />
        <div className="regist-contain">
          <div className='left-side'>
            <h2>FORMULARIO DE ADMISIÓN PARA DOCENTES</h2>
            <h3>
              {tipo}
              {identidad}
              {email}
            </h3>
            {/*borrar es solo para probar promps*/}
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className='label1' htmlFor="email">CEDULA:</label>
                <input className='input1'
                  type="text"
                  id="cedula"
                  value={identidad}
                  // onChange={(e) => setEmail(e.target.value)}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className='label1' htmlFor="email">CORREO:</label>
                <input className='input1'
                  type="email"
                  id="email"
                  value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className='label1' htmlFor="nombreCompleto">
                  NOMBRES Y APELLIDOS COMPLETOS:
                </label>
                <input className='input1'
                  type="text"
                  id="nombreCompleto"
                  value={nombreCompleto}
                  onChange={handleChange}
                  placeholder="Nombres Completos"
                  required
                />
                {formError.cand_nombre1 && (
                  <span className="error-message">{formError.cand_nombre1}</span>
                )}
              </div>

              <div className="form-group">
                <label className='label1' htmlFor="titulosenecyt">
                  SELECCIONE EL TÍTULO DE SENECYT PARA POSTULAR:
                </label>
                <select className='input1'
                  id="titulosenecyt"
                  value={tituloSenecyt}
                  onChange={(e) => setTituloSenecyt(e.target.value)}
                  required
                >
                  <option value="">Seleccione...</option>
                  <option value="Técnico Superior">Técnico Superior</option>
                  <option value="Tecnólogo">Tecnólogo</option>
                  <option value="Tercer Nivel">Tercer Nivel</option>
                  <option value="Cuarto Nivel">Magister</option>
                </select>
              </div>

              <div className="form-group">
                <label className='label1' htmlFor="sexo">SEXO:</label>
                <select className='input1'
                  id="sexo"
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                  required
                >
                  <option value="">Seleccione...</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label className='label1' htmlFor="fechaNacimiento">FECHA DE NACIMIENTO:</label>
                <input className='input1'
                  type="date"
                  id="fechaNacimiento"
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                  required
                />
              </div>

              {
                <div className="form-group">
                  <label className='label1' htmlFor="password">CONTRASEÑA:</label>
                  <input className='input1'
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              }


              <TermsAndConditions
                onTycCheckedChange={(checked) => {
                  const submitBtn = document.getElementById("submitBtn");
                  submitBtn.disabled = !checked;
                }}
              />
              <div className="submit">
                <Link to="login"><button type="submit" id="submitBtn" className="submit-btn" disabled>
                  Enviar
                </button></Link>
              </div>
            </form>
          </div>

          <div className='rigth-side'>
            <div className='welcomeimg'>
                <img src={espelogo} id='wel-img-id' alt='' />
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterInformation;
