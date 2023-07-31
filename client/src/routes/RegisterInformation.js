import React, { useState } from 'react';
import Navbar from "../components/Navbar"
import './Register.css';
import './RegisterInformation.css';
import axios from "axios";

const RegisterInformation = () => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [tituloSenecyt, setTituloSenecyt] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'nombreCompleto':
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
    const [nombre1, nombre2, apellido1, ...apellidoArray] = nombreCompleto.split(" ");
    const apellido2 = apellidoArray.join(" ");

    const data = {
      cand_tipo_identificacion: "Pasaporte",
      cand_num_identificacion: "1721354262",
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
      const response = await axios.post("http://localhost:5000/candidatos", data);
      console.log("Candidato registrado:", response.data);

      // Restablecer campos después del envío exitoso
      setNombreCompleto('');
      setTituloSenecyt('');
      setSexo('');
      setEmail('');
      setPassword('');
      setFechaNacimiento('');
      setShowAlert(true);
      setFormError({});
    } catch (error) {
      console.error("Error al registrar candidato:", error.message);
      if (error.response && error.response.data) {
        setFormError(error.response.data);
      }
    }
  };

  const LoginValidar = () => {
    setShowAlert(false);
    window.location.href = '/login';
  };

  return (
    <React.Fragment>
      <Navbar />
      <br/><br/><br/><br/><br/>
      <div className="register-form-container">
        <h2>FORMULARIO DE ADMISIÓN PARA DOCENTES</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombreCompleto">NOMBRES Y APELLIDOS COMPLETOS:</label>
            <input
              type="text"
              id="nombreCompleto"
              value={nombreCompleto}
              onChange={handleChange}
              placeholder="Nombres Completos"
              required
            />
            {formError.cand_nombre1 && <span className="error-message">{formError.cand_nombre1}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="titulosenecyt">SELECCIONE EL TÍTULO DE SENECYT PARA POSTULAR:</label>
            <select
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
            <label htmlFor="sexo">SEXO:</label>
            <select
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
            <label htmlFor="fechaNacimiento">FECHA DE NACIMIENTO:</label>
            <input
              type="date"
              id="fechaNacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">CORREO:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          { <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div> }

          <div className="advertencia">Utilizar solo cuentas de gmail, hotmail, outlook.</div>

          <button type="submit" className="submit-btn">Enviar</button>
        </form>
        {showAlert && (
          <div className="custom-alert">
            <p>Datos enviados correctamente.</p>
            <p>Ingrese el código enviado a su correo.</p>
            <p>867362</p>
            <button className="custom-alert-btn" onClick={LoginValidar}>Validar</button>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default RegisterInformation;
