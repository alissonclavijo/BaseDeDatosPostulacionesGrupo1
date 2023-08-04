import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Login.css";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showCustomAlert, setShowCustomAlert] = useState(false);

  const { login } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Por favor, ingresa tu email y contraseña.");
    } else {
      setErrorMessage("");
      // En una implementación real, aquí enviarías los datos al servidor para autenticar al usuario.
      // Si las credenciales son válidas, llama a la función login del contexto para marcar el inicio de sesión exitoso.
      login();
      // Redirigir al usuario a la página de inicio después del inicio de sesión exitoso
      window.location.href = ("/homepost");
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
          <h1>Postulantes</h1>
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