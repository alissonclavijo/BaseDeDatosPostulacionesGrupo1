import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Login.scss";
import {Link} from "react-router-dom";
import { useAuth } from "./AuthContext";
import inni from '../img/login.png'

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
      window.location.href =("/homepost");
    }
  };

  const handleCloseCustomAlert = () => {
    setShowCustomAlert(false);
    // Puedes agregar aquí cualquier otra lógica que desees realizar después de cerrar la alerta.
  };

  return (
    <>
      <div className="main-login">
        <Navbar />
        <br /><br /><br /><br /><br /><br />

        <div className="login-contain">
          
        <div className='rigth-side1'>
                <div className='welcomenote1'>
                    <h3>Bienvenido de vuelta!!!</h3>
                    <br/>
                </div>

                <div className='welcomeimg1'>
                    <img src={inni} id='wel-img-id1' alt='' />
                </div>
          </div>

          <div className="left-side1">
          <br/><br/><br/>
            <h2>Inicio de sesión</h2>
            <br/>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>

                <label className='label2' htmlFor="email">Email:</label>
                <input className='input2'
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />



                <label className='label2' htmlFor="password">Contraseña:</label>
                <input className='input2'
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />

              <button type="submit" className="submit-btn">
                Iniciar sesión
              </button>
            </form>
          </div>

          

        </div>

        {showCustomAlert && (
          <div className="custom-alert">
            <p>Tu información será manipulada conforme a la necesidad de la institución sin lugar a reclamos, conforme a la ley de protección de datos del Ecuador.</p>
            <Link to="/homepost"><button className="submit-btn" onClick={handleCloseCustomAlert}>
              Aceptar
            </button></Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;