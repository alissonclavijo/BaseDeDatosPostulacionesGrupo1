import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios"; // Importa la biblioteca axios

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica si los campos están vacíos
    if (!email || !password) {
      setErrorMessage("Por favor, ingresa tu email y contraseña.");
      return;
    }

    try {
      // Envía los datos al backend utilizando axios
      const response = await axios.post("/login", {
        email,
        password,
      });

      // Aquí puedes realizar cualquier acción necesaria con la respuesta del backend
      console.log("Respuesta del servidor:", response.data);

      // Mostrar la alerta personalizada al iniciar sesión
      setShowCustomAlert(true);
    } catch (error) {
      // Si ocurre un error al autenticar, muestra un mensaje de error
      if (error.response && error.response.status === 401) {
        setErrorMessage("Credenciales inválidas. Por favor, verifica tu email y contraseña.");
      } else {
        setErrorMessage("Error al iniciar sesión. Por favor, intenta nuevamente más tarde.");
      }
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
