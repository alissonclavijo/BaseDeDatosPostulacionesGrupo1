import React, { useState,useEffect  } from "react";
import Navbar from "../components/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import verificarCedula from "../utils/validacionCedula";
import axios from "axios";

const imagen = require.context("../img/");

function Register() {
  const [cedulaExists, setCedulaExists] = useState(false);
  const [tipoIdentificacion, setTipoIdentificacion] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [captchaResuelto, setCaptchaResuelto] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si la cédula ya existe en la base de datos
    if (identificacion && tipoIdentificacion === "Cédula") {
      axios
        .get(`http://localhost:5000/candidatos/${identificacion}`)
        .then((response) => {
          if (response.status === 200) {
            setCedulaExists(true);
          } else {
            setCedulaExists(false);
          }
        })
        .catch((error) => {
          // La cédula no existe en la base de datos
          setCedulaExists(false);
        });
    } else {
      // La cédula no se ha ingresado o no es del tipo "Cédula"
      setCedulaExists(false);
    }
  }, [identificacion, tipoIdentificacion]);

  const handleTipoIdentificacionChange = (e) => {
    setTipoIdentificacion(e.target.value);
  };

  const handleIdentificacionChange = (e) => {
    setIdentificacion(e.target.value);
  };

  const handleClick = async () => {
    if (!captchaResuelto) {
      setErrorMensaje("Por favor, resuelve el captcha.");
      return;
    }

    if (!verificarCedula(identificacion)) {
      setErrorMensaje("Por favor, ingrese una cédula válida.");
      return;
    }
    if (cedulaExists) {
      setErrorMensaje("La cédula ingresada ya existe en la base de datos.");
      return;
    }

    navigate("/validacioncorreo", {
      state: { tipo: tipoIdentificacion, identidad: identificacion },
    });

  
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
                      Seleccione la identificación{" "}
                    </option>
                    <option value="Cédula">Cédula</option>
                    <option value="Pasaporte">Pasaporte</option>
                  </select>
                  <label htmlFor="cedula">Identificación:</label>
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

                  <button
                  type="button" 
                  onClick={handleClick}
                  className="custom-alert-btn">
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
