import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import './Register.css';

const imagen = require.context("../img/");

function Register() {
    const [cedula, setCedula] = useState('');
    const [errorMensaje, setErrorMensaje] = useState('');
    const [captchaResuelto, setCaptchaResuelto] = useState(false);
    const [tipoIdentificacion, setTipoIdentificacion] = useState('');
    const [tipoIdentificacionError, setTipoIdentificacionError] = useState('');
    const [intentoEnvio, setIntentoEnvio] = useState(false);
    const [camposFaltantes, setCamposFaltantes] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        if (value.length <= 10 && /^\d*$/.test(value)) {
            setCedula(value);
            setErrorMensaje('');
        } else {
            setErrorMensaje('El espacio no debe quedar vacío');
        }
    };

    const handleCaptchaChange = (value) => {
        if (value) {
            setErrorMensaje('');
            setCaptchaResuelto(true);
        } else {
            setErrorMensaje('Por favor, resuelve el captcha.');
            setCaptchaResuelto(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const camposFaltantesTemp = [];
        
        if (!tipoIdentificacion) {
            camposFaltantesTemp.push('tipo de identificación');
            setTipoIdentificacionError('Seleccione un tipo de identificación');
        } else {
            setTipoIdentificacionError('');
        }
        
        if (cedula.length !== 10) {
            camposFaltantesTemp.push('cédula');
            setErrorMensaje('Compruebe que su cédula esté escrita correctamente');
        } else {
            setErrorMensaje('');
        }

        if (!captchaResuelto) {
            camposFaltantesTemp.push('captcha');
            setErrorMensaje('Por favor, resuelve el captcha.');
        }

        // Si hay campos faltantes, mostramos el mensaje y marcamos que se intentó enviar el formulario
        if (camposFaltantesTemp.length > 0) {
            setErrorMensaje('Faltan llenar los siguientes campos: ' + camposFaltantesTemp.join(', '));
            setCamposFaltantes(camposFaltantesTemp);
            setIntentoEnvio(true);
            return;
        }

        // Aquí puedes realizar las acciones que desees con la cédula ingresada
        console.log('Cédula válida:', cedula);
        setErrorMensaje('');
        setTipoIdentificacionError('');
        setCamposFaltantes([]);
        setIntentoEnvio(false); // Reiniciamos el estado de intentoEnvio

        // Aquí puedes enviar el formulario o realizar cualquier otra acción necesaria
    };

    // Habilitar el botón de "Enviar" solo si todos los campos están llenos y el captcha está resuelto
    const isSubmitButtonDisabled = !tipoIdentificacion || cedula.length !== 10 || !captchaResuelto;

    return (
        <>
            <Navbar />
            <div className="conregister">
                <img className="banner" src={(imagen("./banner_profesores.jpg"))} alt="Universidad" />
                <div className="register">
                    <div className="containere">
                        <div className="centredeDiv">
                            <h1>Registro de Postulantes a Docentes</h1>
                            <div className="form-container">
                                <form onSubmit={handleSubmit} className="cedula-form">
                                    <div className="form-group">
                                        <label htmlFor="tipoIdentificacion">TIPO DE IDENTIFICACIÓN:</label>
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
                                        <span className="error-message">{tipoIdentificacionError}</span>
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
                                        <button type="submit" className="btn" disabled={isSubmitButtonDisabled}>
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
    )
}

export default Register;
