import React, { useState, useEffect } from 'react';
import Navpost from '../components/Navpost';
import "./Postulacion.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Postulacion() {
  const [selectedOption, setSelectedOption] = useState(""); // Estado para controlar la opción seleccionada en el combo box
  const [postulacion, setPostulacion] = useState('');
  const [contratacion, setContratacion] = useState('');
  const [academico, setAcademico] = useState('');
  const [oferta, setOferta] = useState('');
  const [opcionesPostulacion, setOpcionesPostulacion] = useState([]);
  const [opcionesContratacion, setOpcionesContratacion] = useState([]);
  const [opcionesAcademico, setOpcionesAcademico] = useState([]);
  const [opcionesOferta, setOpcionesOferta] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/postulaciones") // Cambia la URL de la API con la que te conectas a la base de datos
      .then((response) => {
        setOpcionesPostulacion(response.data); // Actualiza el estado con los datos recibidos de la API
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de postulación:", error);
      });
    axios.get("http://localhost:5000/contrataciones") // Cambia la URL de la API con la que te conectas a la base de datos
      .then((response) => {
        setOpcionesContratacion(response.data); // Actualiza el estado con los datos recibidos de la API
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de contratación:", error);
      });
    axios.get("http://localhost:5000/personal_academico") // Cambia la URL de la API con la que te conectas a la base de datos
      .then((response) => {
        setOpcionesAcademico(response.data); // Actualiza el estado con los datos recibidos de la API
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de personal académico:", error);
      });
    axios.get("http://localhost:5000/ofertas") // Cambia la URL de la API con la que te conectas a la base de datos
      .then((response) => {
        setOpcionesOferta(response.data); // Actualiza el estado con los datos recibidos de la API
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de ofertas:", error);
      });
  }, []);



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
            <br />

            <div className="form-group">
              <label for="postulacion">POSTULACIÓN</label>
              <select
                name="Periodo"
                onChange={(e) => {
                  setPostulacion(e.target.value);
                }}
                value={postulacion}
              >
                {opcionesPostulacion.map((opcion) => (
                  <option key={opcion.post_periodo} value={opcion.post_periodo}>
                    {opcion.post_periodo}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label for="contratacion">TIPO DE CONTRATACIÓN</label>
              <select
                name="Contratacion"
                onChange={(e) => {
                  setContratacion(e.target.value);
                }}
                value={contratacion}
              >
                {opcionesContratacion.map((opcion) => (
                  <option key={opcion.con_nombre} value={opcion.con_nombre}>
                    {opcion.con_nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label for="academico">TIPO DE PERSONAL ACADÉMICO</label>
              <select
                name="Academicoo"
                onChange={(e) => {
                  setAcademico(e.target.value);
                }}
                value={academico}
              >
                {opcionesAcademico.map((opcion) => (
                  <option key={opcion.pa_nombre} value={opcion.pa_nombre}>
                    {opcion.pa_nombre}
                  </option>
                ))}
              </select>
            </div>
            
              <div>
                <div>
                  <h3>Vacantes</h3>
                  <input
                    type="text"
                    value="3"
                    readOnly
                    class="cuadro-texto"
                  />
                </div>
                <div>
                  <h3>Tiempo</h3>
                  <input
                    type="text"
                    value="8"
                    readOnly
                    class="cuadro-texto"
                  />
                </div>
                <div>
                  <h3>Campo Amplio</h3>
                  <input
                    type="text"
                    value="Informática"
                    readOnly
                    class="cuadro-texto"
                  />
                </div>
                <div>
                  <h3>Campo Específico</h3>
                  <input
                    type="text"
                    value="BD"
                    readOnly
                    class="cuadro-texto"
                  />
                </div>
                <div>
                  <h3>Sede</h3>
                  <input
                    type="text"
                    value="Matriz"
                    readOnly
                    class="cuadro-texto"
                  />
                </div>
                <div>
                  <h3>Departamento </h3>
                  <input
                    type="text"
                    value="DCCE"
                    readOnly
                    class="cuadro-texto"
                  />
                </div>
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
            <br />
            <br />
            <button type="submit" className="submit-btn">Postular</button>
          </div>

        </div>
      </div >
    </>
  );
}

export default Postulacion;
