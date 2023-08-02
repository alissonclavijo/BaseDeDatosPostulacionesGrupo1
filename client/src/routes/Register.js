import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const imagen = require.context("../img/");

function Register() {
  const [cedula, setCedula] = useState("");
  const [errorMensaje, setErrorMensaje] = useState("");
  const [captchaResuelto, setCaptchaResuelto] = useState(false);
  const [tipoIdentificacion, setTipoIdentificacion] = useState("");
  const [tipoIdentificacionError, setTipoIdentificacionError] = useState("");
  const [intentoEnvio, setIntentoEnvio] = useState(false);
  const [camposFaltantes, setCamposFaltantes] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length <= 10 && /^\d*$/.test(value)) {
      setCedula(value);
      setErrorMensaje("");
    } else {
      setErrorMensaje("El espacio no debe quedar vacío");
    }
  };

  const validarCedula = (cedula) => {
    // Eliminar espacios en blanco al inicio y final de la cédula
    if (
      typeof cedula === "string" &&
      cedula.length === 10 &&
      /^\d+$/.test(cedula)
    ) {
      var digitos = cedula.split("").map(Number);
      var codigo_provincia = digitos[0] * 10 + digitos[1];

      //if (codigo_provincia >= 1 && (codigo_provincia <= 24 || codigo_provincia == 30) && digitos[2] < 6) {

      if (
        codigo_provincia >= 1 &&
        (codigo_provincia <= 24 || codigo_provincia === 30)
      ) {
        var digito_verificador = digitos.pop();

        var digito_calculado =
          digitos.reduce(function (valorPrevio, valorActual, indice) {
            return (
              valorPrevio -
              ((valorActual * (2 - (indice % 2))) % 9) -
              (valorActual === 9) * 9
            );
          }, 1000) % 10;
        return digito_calculado === digito_verificador;
      }
    }
    return false;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const camposFaltantesTemp = [];

    if (!tipoIdentificacion) {
      camposFaltantesTemp.push("tipo de identificación");
      setTipoIdentificacionError("Seleccione un tipo de identificación");
    } else {
      setTipoIdentificacionError("");
    }

    if (cedula.length !== 10) {
      camposFaltantesTemp.push("cédula");
      setErrorMensaje("Compruebe que su cédula esté escrita correctamente");
    } else {
      // Validar la cédula con la función validarCedula
      const cedulaValida = validarCedula(cedula);
      if (!cedulaValida) {
        setErrorMensaje("Cédula no es correcta");
      } else {
        setErrorMensaje("");
      }
    }

    if (!captchaResuelto) {
      camposFaltantesTemp.push("captcha");
      setErrorMensaje("Por favor, resuelve el captcha.");
    }

    // Si hay campos faltantes, mostramos el mensaje y marcamos que se intentó enviar el formulario
    if (camposFaltantesTemp.length > 0) {
      setErrorMensaje(
        "Faltan llenar los siguientes campos: " + camposFaltantesTemp.join(", ")
      );
      setCamposFaltantes(camposFaltantesTemp);
      setIntentoEnvio(true);
      return;
    }

    try {
      // Envía los datos al backend utilizando axios
      const data = {
        cand_tipo_identificacion: tipoIdentificacion,
        cand_num_identificacion: cedula,
        // Agrega aquí los otros campos necesarios para el registro del candidato
      };
      const response = await axios.post(
        "http://localhost:5000/candidatos",
        data
      );

      // Aquí puedes realizar cualquier acción necesaria con la respuesta del backend
      console.log("Candidato registrado:", response.data);

      // Reinicia los estados del formulario después de un registro exitoso
      setTipoIdentificacion("");
      setCedula("");
      setCaptchaResuelto(false);
      setErrorMensaje("");
      setTipoIdentificacionError("");
      setCamposFaltantes([]);
      setIntentoEnvio(false); // Reiniciamos el estado de intentoEnvio
    } catch (error) {
      // Si ocurre un error al enviar los datos al backend, muestra un mensaje de error
      console.error("Error al registrar candidato:", error.message);
    }
  };
  const isSubmitButtonDisabled =
    !tipoIdentificacion ||
    cedula.length !== 10 ||
    !captchaResuelto ||
    !validarCedula(cedula);

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
            <div className="centredeDivconCapcha">
              <h1>Registro de Postulantes a Docentes</h1>
              <div className="form-container">
                <form onSubmit={handleSubmit} className="cedula-form">
                  <div className="form-group">
                    <label htmlFor="tipoIdentificacion">
                      TIPO DE IDENTIFICACIÓN:
                    </label>
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
                    <span className="error-message">
                      {tipoIdentificacionError}
                    </span>
                  </div>
                  <label htmlFor="cedula">Número de identificación:</label>
                  <input
                    type="text"
                    id="cedula"
                    name="cedula"
                    value={cedula}
                    onChange={handleChange}
                    maxLength="10"
                    pattern="[0-9]*"
                    title="Verifique que el número de cédula haya sido escrito correctamente"
                    required
                  />
                  <span className="error-message">{errorMensaje}</span>

                  {/* Mostrar mensaje de cédula no válida */}
                  {intentoEnvio && camposFaltantes.includes("cédula") && (
                    <div className="error-message">Cédula no es correcta</div>
                  )}
                  <div className="captcha">
                    <ReCAPTCHA
                      sitekey="6LclwkwnAAAAAC1Ku7FR7uiJ6Dgn6Yt-34d3andC"
                      onChange={handleCaptchaChange}
                    />
                  </div>
                  <span className="error-message">{errorMensaje}</span>

                  {/* Mostrar mensaje de campos faltantes solo si se intentó enviar el formulario */}
                  {intentoEnvio && camposFaltantes.length > 0 && (
                    <div className="campos-faltantes">
                      <p>Faltan llenar los siguientes campos:</p>
                      <ul>
                        {camposFaltantes.map((campo) => (
                          <li key={campo}>{campo}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link to="/registerinformation">
                    <button
                      type="submit"
                      className="btn"
                      disabled={isSubmitButtonDisabled}
                    >
                      Enviar
                    </button>
                  </Link>
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
