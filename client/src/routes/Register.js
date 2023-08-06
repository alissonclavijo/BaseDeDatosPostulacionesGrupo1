import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import verificarCedula from "../utils/validacionCedula";
import axios from "axios";

const imagen = require.context("../img/");

function Register() {
  const [tipoIdentificacion, setTipoIdentificacion] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [captchaResuelto, setCaptchaResuelto] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");
  const navigate = useNavigate();

  const handleTipoIdentificacionChange = (e) => {
    setTipoIdentificacion(e.target.value);
  };

  const handleIdentificacionChange = (e) => {
    setIdentificacion(e.target.value);
  };

  const handleClick = async () => {
    const cedulaValida = verificarCedula(identificacion);
    if (cedulaValida) {
      navigate("/validacioncorreo", {
        state: { tipo: tipoIdentificacion, identidad: identificacion },
      });
    } else {
      setErrorMensaje("Por favor, ingrese una cédula válida.");
    }

    /*const cedulaValida = verificarCedula(identificacion);
    if (cedulaValida) {
      try {
        // Realiza una solicitud a la API para verificar si la cédula ya existe
        const response = await axios.get(`http://localhost:5000/candidatos/${identificacion}`);
        
        if (response.data.existe) {
          console.log(response.data.existe);
          setErrorMensaje("La cédula ya está registrada en la base de datos.");
        } else {
          // Si la cédula no existe, navega a la página RegisterInformation
          navigate('/registerinformation', { state: { tipo: tipoIdentificacion, identidad: identificacion } });
        }
      } catch (error) {
        console.error("Error al verificar la cédula:", error.message);
        setErrorMensaje("Error al verificar la cédula. Por favor, intenta nuevamente.");
      }
    } else {
      setErrorMensaje("Por favor, ingrese una cédula válida.");
    }*/
  };

  const handleCaptchaChange = (value) => {
    if (value) {
      setErrorMensaje("");
      setCaptchaResuelto(true);
    } else {
      setErrorMensaje("Por favor, resuelve el captcha.");
      setCaptchaResuelto(false);
    }
  };

  return (
    <>
      <Navbar />
      
      <div className="conregister">
        <img
          className="banner"
          src={imagen("./banner_profesores.jpg")}
          alt="Universidad"
        />
        <div className="register">
       
          <div className="containere">
            <div className="centredeDiv">
              <h2>Registro de Postulantes a Docentes</h2>
              <div className="form-container">
                <form className="cedula-form">
                  <label htmlFor="tipoIdentificacion">
                    Seleccione un tipo:
                  </label>
                  <select
                    id="tipoIdentificacion"
                    name="tipoIdentificacion"
                    value={tipoIdentificacion}
                    onChange={handleTipoIdentificacionChange}
                  >
                    <option value="identificacion">
                      Seleccione la identificacion{" "}
                    </option>
                    <option value="Cedula">Cédula</option>
                    <option value="Pasaporte">Pasaporte</option>
                  </select>
                  <label htmlFor="cedula">Identificacion:</label>
                  <input
                    type="text"
                    id="cedula"
                    name="cedula"
                    value={identificacion}
                    onChange={handleIdentificacionChange}
                    maxLength="10"
                    pattern="[0-9]*"
                    title="Verifique que el número de cédula ha sido escrito correctamente"
                    required
                  />
                  <div className="captcha">
                    <ReCAPTCHA
                      sitekey="6LclwkwnAAAAAC1Ku7FR7uiJ6Dgn6Yt-34d3andC"
                      onChange={handleCaptchaChange}
                    />
                  </div>
                  <span className="error-message">{errorMensaje}</span>

                  {/* Mostrar mensaje de campos faltantes solo si se intentó enviar el formulario */}
                  <button onClick={handleClick} className="custom-alert-btn">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
