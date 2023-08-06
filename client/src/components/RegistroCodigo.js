import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./RegistroCodigo.css"; 

const RegistroCodigo = ({ correo, onSubmitCodigo }) => {
  const [inputCodigo, setInputCodigo] = useState("");
  const [codigoVerificacion, setCodigoVerificacion] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Realiza una solicitud al backend para verificar el código de verificación
    try {
      const response = await fetch("http://localhost:5000/verificar-codigo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo, codigo: inputCodigo }),
      });

      if (response.ok) {
        onSubmitCodigo(inputCodigo); // Llama a onSubmitCodigo solo si el código es válido
      } else {
        setErrorMessage("Código de verificación inválido.");
      }
    } catch (error) {
      console.error("Error al verificar el código:", error);
      setErrorMessage("Error al verificar el código.");
    }
  };

  return (
    <div>
      <div class="background-image">
        <Navbar/>
        <div className="registro-codigo-container"> {/* Agregamos una clase CSS para el contenedor */}
          <h2>Ingrese el código que se envió al correo</h2>
          <form onSubmit={handleSubmit}>
            <p>Correo electrónico:</p>
            <input type="text" value={correo} readOnly />
            <p>
              Se envió un código a su correo. Por favor, ingréselo a continuación:
            </p>
            <input
              type="text"
              placeholder="Código"
              value={inputCodigo}
              onChange={(e) => setInputCodigo(e.target.value)}
            />
            <button type="submit">Continuar</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Mostrar mensaje de error si existe */}
        </div>
      </div>
  </div>
  );
};

export default RegistroCodigo;
