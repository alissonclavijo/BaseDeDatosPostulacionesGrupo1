import React, { useState } from "react";
import Navbar from "../components/Navbar"
import ReCAPTCHA from "react-google-recaptcha";
import './Register.css';
import './RegisterInformation.js';
import { Link } from "react-router-dom";

const imagen = require.context("../img/");

function Register (){
    const [cedula, setCedula] = useState('');
    const [errorMensaje, setErrorMensaje] = useState('');
    const [captchaResuelto, setCaptchaResuelto] = useState(false);

    const handleChange = (e) => {
        const { value } = e.target;
        if (value.length <= 10 && /^\d*$/.test(value)) {
            setCedula(value);
            setErrorMensaje('');
        } else {
            setErrorMensaje('El espacio no debe quedar vacio');
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
        if (cedula.length !== 10) {
            setErrorMensaje('Compruebe que su cédula este escrita correctamente');
        } else if (!captchaResuelto) {
            setErrorMensaje('Por favor, resuelve el captcha.');
        } else {
        // Aquí puedes realizar las acciones que desees con la cédula ingresada
        console.log('Cédula válida:', cedula);
        setErrorMensaje('');
        }
    };

    return(
        <>
        <Navbar/>
        <div className="conregister">
            <img className="banner" src={(imagen("./banner_profesores.jpg"))} alt="Universidad" />
                <div className="register">
                    <div className="containere">
                        <div className="centredeDiv">
                            <h1>Registro de Postulantes a Docentes</h1>
                            <div className="form-container">
                                <form onSubmit={handleSubmit} className="cedula-form">
                                    <label htmlFor="cedula">Cédula de Identidad:</label>
                                    <input
                                        type="text"
                                        id="cedula"
                                        name="cedula"
                                        value={cedula}
                                        onChange={handleChange}
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
                                    <Link to="/registerinformation"><button type="submit" className="btn">Enviar</button></Link>
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