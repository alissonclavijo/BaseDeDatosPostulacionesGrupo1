import React, { useState } from "react";
import Navpost from '../components/Navpost';
import "./Postulacion.css";
import { Link } from "react-router-dom";

function Postulacion() {
  const [selectedOption, setSelectedOption] = useState(""); // Estado para controlar la opción seleccionada en el combo box

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    // Aquí puedes agregar la lógica que desees para el botón
    // Por ejemplo, cambiar el color o realizar alguna acción específica
    // En este ejemplo, solo cambiaremos el color del botón.
  };

  return (
    <>
    <div className="body">
      <Navpost />

      <div className="contenedor">
        <div className="postulacion">
          <h1>Bienvenido a la Plataforma ESPE Docentes</h1>
          <br/>
          <h1>Postulacion</h1>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Seleccionar Postulacion</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>

          <h1>Tipo de Contratacion</h1>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Selecciona tipo de contratacion</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>

          <h1>Tipo de Personal Academico</h1>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Selecciona tipo de personal academico</option>
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
              class="cuadro-texto"
            />
          </div>
          <div>
            <h3>Tiempo</h3>
            <input
              type="text"
              value=""
              readOnly
              class="cuadro-texto"
            />
          </div>
          <div>
            <h3>Campo Amplio</h3>
            <input
              type="text"
              value=""
              readOnly
              class="cuadro-texto"
            />
          </div>
          <div>
            <h3>Campo Específico</h3>
            <input
              type="text"
              value=""
              readOnly
              class="cuadro-texto"
            />
          </div>
          <div>
            <h3>Sede</h3>
            <input
              type="text"
              value=""
              readOnly
              class="cuadro-texto"
            />
          </div>
          <div>
            <h3>Departamento </h3>
            <input
              type="text"
              value=""
              readOnly
              class="cuadro-texto"
            />
          </div>
          
          <button onClick={handleButtonClick}>Actividad Docencia</button>
          <button onClick={handleButtonClick}>Actividad Investigacion</button>
          <button onClick={handleButtonClick}>Actividad Vinculacion</button>

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
         <br/>
         <button type="submit" className="submit-btn">Postular</button>
        </div>

      </div>
      </div>
    </>
  );
}

export default Postulacion;
