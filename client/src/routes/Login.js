import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Login.css";
import {Link} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showCustomAlert, setShowCustomAlert] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica de autenticación, por ejemplo, enviar los datos al servidor y verificar las credenciales.
    // En este ejemplo, solo mostramos un mensaje si los campos están vacíos.
    if (!email || !password) {
      setErrorMessage("Por favor, ingresa tu email y contraseña.");
    } else {
      setErrorMessage("");
      // Aquí podrías hacer la lógica de autenticación real.

      // Mostrar la alerta personalizada al iniciar sesión
      setShowCustomAlert(true);
    }
  };

  const handleCloseCustomAlert = () => {
    setShowCustomAlert(false);
    // Puedes agregar aquí cualquier otra lógica que desees realizar después de cerrar la alerta.
  };

  return (
    <>
      <Navbar />
      <br /><br /><br /><br /><br /><br />

      <div className="login-container">
        <img
          className="login-image"
          src="https://pbs.twimg.com/media/FVYQgTtUEAIvl8v?format=jpg&name=large" // Agrega la URL de la imagen de fondo aquí
          alt="Login"
        />
        <div className="login-form">
          <h2>Inicio de sesión</h2>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>

      {showCustomAlert && (
        <div className="custom-alert">
          <p>Tu información será manipulada conforme a la necesidad de la institución sin lugar a reclamos, conforme a la ley de protección de datos del Ecuador.</p>
          <Link to="/homepost"><button className="custom-alert-btn" onClick={handleCloseCustomAlert}>
            Aceptar
          </button></Link>
        </div>
      )}
    </>
  );
};

export default Login;