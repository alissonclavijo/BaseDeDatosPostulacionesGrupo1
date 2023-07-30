import React, { useState } from "react";
import Navbar from "../components/Navbar2";
import "./Postulacion.css";

function Postulacion() {
  const [postulacionOption, setPostulacionOption] = useState(""); // Estado para controlar la opción seleccionada en el combo box de Postulacion
  const [contratacionOption, setContratacionOption] = useState(""); // Estado para controlar la opción seleccionada en el combo box de Contratación
  const [personalOption, setPersonalOption] = useState(""); // Estado para controlar la opción seleccionada en el combo box de Personal Académico

  const handlePostulacionChange = (event) => {
    setPostulacionOption(event.target.value);
  };

  const handleContratacionChange = (event) => {
    setContratacionOption(event.target.value);
  };

  const handlePersonalChange = (event) => {
    setPersonalOption(event.target.value);
  };

  const handleButtonClick = () => {
    // Aquí puedes agregar la lógica para confirmar los campos
    if (postulacionOption && contratacionOption && personalOption) {
      const message = `Verifique los datos:\n\nTipo de contratación: ${contratacionOption}\nTipo de personal: ${personalOption}\n\nSolo puede postular una vez por concurso, verifique los datos antes de enviar.`;
      window.alert(message);
    } else {
      alert("Por favor, completa todos los campos antes de confirmar.");
    }
  };

  // Función que verifica si todos los campos están llenos
  const areFieldsFilled = () => {
    return postulacionOption && contratacionOption && personalOption;
  };  

  return (
    <>
      <Navbar />

      <div className="contenedor">
        <div className="postulacion">
          <h1>Bienvenido a la Plataforma ESPE Docentes</h1>
          <br />
          <h1>Postulación</h1>
          <select className="custom-select" value={postulacionOption} onChange={handlePostulacionChange}>
            <option value="">Seleccionar Postulación</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>

          <h1>Tipo de Contratación</h1>
          <select className="custom-select" value={contratacionOption} onChange={handleContratacionChange}>
            <option value="">Seleccionar tipo de contratación</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>

          <h1>Tipo de Personal Académico</h1>
          <select className="custom-select" value={personalOption} onChange={handlePersonalChange}>
            <option value="">Seleccionar tipo de personal académico</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>

          <div>
            <h3>Vacantes</h3>
            <input
              type="text"
              value=""
              readOnly
              className="cuadro-texto"
            />
          </div>
          <div>
            <h3>Tiempo</h3>
            <input
              type="text"
              value=""
              readOnly
              className="cuadro-texto"
            />
          </div>
          <div>
            <h3>Campo Amplio</h3>
            <input
              type="text"
              value=""
              readOnly
              className="cuadro-texto"
            />
          </div>
          <div>
            <h3>Campo Específico</h3>
            <input
              type="text"
              value=""
              readOnly
              className="cuadro-texto"
            />
          </div>
          <div>
            <h3>Sede</h3>
            <input
              type="text"
              value=""
              readOnly
              className="cuadro-texto"
            />
          </div>
          <div>
            <h3>Departamento </h3>
            <input
              type="text"
              value=""
              readOnly
              className="cuadro-texto"
            />
          </div>

          <button onClick={handleButtonClick}>Actividad Docencia</button>
          <button onClick={handleButtonClick}>Actividad Investigación</button>
          <button onClick={handleButtonClick}>Actividad Vinculación</button><br/>

          {/*
          <h2>Botón desplegable para formatos de documentos</h2>
          <div className="custom-select">
            <select>
              <option value="pdf">
                <img src="../img/pdf.png" alt="PDF" className="file-icon" />
                PDF
              </option>
              <option value="word">
                <img
                  src="../img/wordimg.png"
                  alt="Word"
                  className="file-icon"
                />
                Word
              </option>
            </select>
          </div>
         */}
         <br/>
          <button onClick={handleButtonClick} disabled={!areFieldsFilled()}>
            Confirmar
          </button>
        </div>
      </div>
    </>
  );
}

export default Postulacion;
