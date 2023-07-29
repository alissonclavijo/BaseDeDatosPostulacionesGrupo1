import React, { useState } from 'react';
import Navbar from "../components/Navbar"
import './Register.css';
import './RegisterInformation.css'; // Importa el archivo de estilos CSS específico para el formulario


const RegisterInformation = () => {
  const [nombres, setNombres] = useState('');
  const [tipoIdentificacion, setTipoIdentificacion] = useState('');
  const [tituloSenecyt, setTituloSenecyt] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', { nombres, tipoIdentificacion, tituloSenecyt, sexo, email, password });
    setShowAlert(true);
  };

  const LoginValidar = () => {
    setShowAlert(false);
    window.location.href = '/login';
  };

  return(
    <>
    <Navbar/>
    <br/><br/><br/><br/><br/>
    <div className="register-form-container">
      <h2>FORMULARIO DE ADMISIÓN PARA DOCENTES</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombres">NOMBRES COMPLETOS:</label>
          <input
            type="text"
            id="nombres"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tipoIdentificacion">Tipo de identificación:</label>
          <select
            id="tipoIdentificacion"
            value={tipoIdentificacion}
            onChange={(e) => setTipoIdentificacion(e.target.value)}
            required
          >
            <option value="">Seleccione...</option>
            <option value="cédula">Cédula</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="titulosenecyt">Selecciona tu titulo senecyt:</label>
          <select
            id="titulosenecyt"
            value={tituloSenecyt}
            onChange={(e) => setTituloSenecyt(e.target.value)}
            required
          >
            <option value="">Seleccione...</option>
            <option value="a">Técnico Superior</option>
            <option value="b">Tecnólogo</option>
            <option value="c">Tercer Nivel</option>
            <option value="d">Cuarto Nivel</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="sexo">Sexo:</label>
          <select
            id="sexo"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            required
          >
            <option value="">Seleccione...</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenimo</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

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
    
    </>
)
}

export default RegisterInformation;