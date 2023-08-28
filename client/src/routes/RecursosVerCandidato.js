import React, { useState, useEffect } from "react";
import NavpostAdmin from "../components/NavpostAdmin";
import "./RecursosVerCandidato.css";
import { useLocation } from "react-router-dom";
import { getTituloExp, ActualizarSolicitud, getDocumentos } from "../services/api";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import InformacionPostulante from "../components/RecursosHumanos/InformacionPostulante";
import Postulacion from "../components/RecursosHumanos/Postulacion";
import Documentos from "../components/RecursosHumanos/Documentos";

const RecursosVerCandidato = () => {
  const [titulo, setTituloExp] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const candidatosData = location.state;
  const postulacion = location.state;
  const contratacion = location.state;
  const actividad = location.state;
  const sedes = location.state;
  const departamento = location.state;
  const campoamplio = location.state;
  const campoespecifico = location.state;
  const [documentos, setDocument] = useState({});
  const [tipo, setTipo] = useState("");
  const [cantAdicionales, setCantAdicionales] = useState(0);
  const [cantIdiomas, setCantIdiomas] = useState(0);
  const [horasCapacitacion, setHorasCapacitacion] = useState(0);
  const [puntExamen, setPuntExamen] = useState(0);
  const [mesesExpDocente, setMesesExpDocente] = useState(0);
  const [cantArticulos, setCantArticulos] = useState(0);
  const [mesesExpProfesional, setMesesExpProfesional] = useState(0);
  const [puntTitulo, setPuntTitulo] = useState(0);
  const [puntAdicionales, setPuntAdicionales] = useState(0);
  const [puntIdiomas, setPuntIdiomas] = useState(0);
  const [puntCapacitacion, setPuntCapacitacion] = useState(0);
  const [totalFormacion, setTotalFormacion] = useState(0);
  const [puntEvaluacion, setPuntEvaluacion] = useState(0);
  const [puntExpDocente, setPuntExpDocente] = useState(0);
  const [totalDocencia, setTotalDocencia] = useState(0);
  const [puntArticulo, setPuntArticulo] = useState(0);
  const [totalProdAcademica, setTotalProdAcademica] = useState(0);
  const [puntExpProfesional, setPuntExpProfesional] = useState(0);
  const [totalExpProfesional, setTotalExpProfesional] = useState(0);
  const [notaFinal, setNotaFinal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setTituloExp(await getTituloExp());
      const documentos = await getDocumentos();
      setDocument(documentos);
    }
    fetchData();
  }, []);
  const handleClick = () => {
    console.log(candidatosData.cand_id)
    console.log(notaFinal)
    actualizarNotaFinal(candidatosData.cand_id, notaFinal, candidatosData.cand_nombre1, candidatosData.cand_apellido1);
  };
  const calificarTitulo = (titulo) => {
    // Obtener el valor seleccionado
    var seleccion = titulo;
    // Actualizar el valor según la selección
    if (seleccion === "maestria") {
      setPuntTitulo(2);
    } else if (seleccion === "doctorado") {
      setPuntTitulo(3);
    }
  }
  const calificarAdicional = (numero) => {
    if (numero >= 1 && numero <= 3) {
      var resultado = numero * 0.5;
      setPuntAdicionales(resultado.toFixed(2));
    } else if (numero === 0) {
      setPuntAdicionales(0.00);
    } else {
      setPuntAdicionales("Número fuera de rango");
    }
  }
  const calificarIdiomas = (numero) => {
    if (numero >= 1 && numero <= 2) {
      var resultado = 3.00 + (numero * 0.25);
      setPuntIdiomas(resultado.toFixed(2));
    } else if (numero <= 0) {
      setPuntIdiomas(3.00);
    }
  }
  const calificarCapacitacion = (horas) => {
    if (horas >= 128 && horas <= 192) {
      var resultado = 3.75 + ((horas - 128) * 0.005);
      setPuntCapacitacion(resultado.toFixed(2));
    } else if (horas === 0) {
      setPuntCapacitacion(3.75);
    } else {
      setPuntCapacitacion("Número fuera de rango");
    }
  }

  const finalFormacion = () => {
    // Obtener los valores 
    var formacion = parseFloat(puntTitulo);
    var adicional = parseFloat(puntAdicionales);
    var idiomas = parseFloat(puntIdiomas);
    var capacitacion = parseFloat(puntCapacitacion);
    var resultado = formacion + adicional + idiomas + capacitacion;
    setTotalFormacion(resultado.toFixed(2));
  }
  useEffect(() => {
    finalFormacion();
  }, [cantAdicionales, puntTitulo, puntAdicionales, puntIdiomas, puntCapacitacion]);
  const calificarExamen = (puntuacion) => {
    if (isNaN(puntuacion) || puntuacion < 0) {
      puntuacion = 0;
    } else if (puntuacion > 100) {
      puntuacion = 100;
    }
    var resultado;
    if (puntuacion < 80) {
      resultado = 2.75;
    } else if (puntuacion >= 80 && puntuacion <= 100) {
      resultado = 2.75 + ((puntuacion - 80) * 0.0125);
      if (resultado > 3.0) {
        resultado = 3.0;
      }
    }
    setPuntEvaluacion(resultado.toFixed(2));
  }
  const calificarExpDocente = (meses) => {
    var resultado;
    if (isNaN(meses) || meses < 0) {
      meses = 0;
    } else if (meses > 48) {
      meses = 48;
    }

    if (meses === 0) {
      resultado = 4.00;
    } else if (meses >= 1 && meses <= 48) {
      resultado = 4.00 + (meses * 0.0104);
      if (resultado > 4.5) {
        resultado = 4.5;
      }
    }

    if (typeof resultado !== 'undefined') {
      setPuntExpDocente(resultado.toFixed(2));
    } else {
      setPuntExpDocente(4.00);
    }
  }
  const finalDocencia = () => {
    var examen = parseFloat(puntEvaluacion);
    var experiencia = parseFloat(puntExpDocente);
    var resultado = examen + experiencia;
    setTotalDocencia(resultado.toFixed(2));
  }
  useEffect(() => {
    finalDocencia();
  }, [puntEvaluacion, puntExpDocente]);
  const calificarPublicaciones = (numero) => {
    if (!numero || isNaN(numero) || numero < 0) {
      numero = 0;
    }
    if (numero >= 0 && numero <= 4) {
      var resultado = 4.00 + (numero * 0.25);
      setPuntArticulo(resultado.toFixed(2)); // Mostrar con 2 decimales
    } else {
      setPuntArticulo("Número fuera de rango");
    }
  }
  const finalProdAcademica = () => {
    var articulo = parseFloat(puntArticulo);
    var resultado;
    if (articulo > 0) {
      resultado = articulo;
    } else {
      resultado = 4.00;
    }
    setTotalProdAcademica(resultado.toFixed(2));
  }
  useEffect(() => {
    finalProdAcademica();
  }, [puntArticulo]);
  const calificarExpProfesional = (meses) => {
    var resultado;
    if (isNaN(meses) || meses < 0) {
      meses = 0;
    } else if (meses > 36) {
      meses = 36;
    }

    if (meses === 0) {
      resultado = 3.00;
    } else if (meses >= 1 && meses <= 36) {
      resultado = 3.00 + (meses * 0.0138);
      if (resultado > 3.5) {
        resultado = 3.5;
      }
    }

    if (typeof resultado !== 'undefined') {
      setPuntExpProfesional(resultado.toFixed(2));
    } else {
      setPuntExpProfesional(3.00);
    }
  }
  const actualizarNotaFinal = async (candId, nuevaNotaFinal, nombre, apellido) => {
    console.log("asdfgh")

    try {
      const response = await axios.put(`http://localhost:5000/solicitudes/${candId}`, { nota_final: nuevaNotaFinal });
      console.log('Solicitud actualizada:', response.data);
      swal({
        title: '',
        content: {
          element: "div",
          attributes: {
            innerHTML: `Se ha cargado correctamente la puntuación de ${nuevaNotaFinal} al candidato ${nombre} ${apellido}<br/>`,
          },
        },
        icon: '',
        button: "Aceptar",
      }).then(() => {
        navigate("/recursosh");
      });
    } catch (error) {
      console.error('Error al actualizar la solicitud:', error);
    }
  };
  const finalExpProfesional = () => {
    var experiencia = parseFloat(puntExpProfesional);
    var resultado;
    if (experiencia > 0) {
      resultado = experiencia;
    } else {
      resultado = 3.00;
    }
    setTotalExpProfesional(resultado.toFixed(2));
  }
  useEffect(() => {
    finalExpProfesional();
  }, [puntExpProfesional]);
  const calcuarNotaFinal = () => {
    var formacion = parseFloat(totalFormacion);
    var docencia = parseFloat(totalDocencia);
    var prodAcademica = parseFloat(totalProdAcademica);
    var expProfesional = parseFloat(totalExpProfesional);
    var resultado = formacion + docencia + prodAcademica + expProfesional;
    setNotaFinal(resultado.toFixed(2));
  }
  useEffect(() => {
    calcuarNotaFinal();
  }, [totalFormacion, totalDocencia, totalProdAcademica, totalExpProfesional]);

  return (
    <div>
      <NavpostAdmin />
      <div className="table-container">
        <div className="applicant-info">
          <InformacionPostulante candidatosData={candidatosData} />
        </div>
        <Postulacion
          postulacion={postulacion}
          contratacion={contratacion}
          actividad={actividad}
          sedes={sedes}
          departamento={departamento}
          campoamplio={campoamplio}
          campoespecifico={campoespecifico}
        />
        <Documentos documentos={documentos} />
        <div className="titulos-container">
          <h1>Calificación</h1>
          <table>
            <thead>
              <tr>
                <th colSpan={3} style={{ textAlign: 'left' }}>1. Formación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <br></br>
                  <input
                    type="text"
                    name="disciplina_titulo"
                    placeholder="Ingrese la disciplina específica"
                  />
                </td>
                <td>
                  <div className="centered-select">
                    <select id="nivelEstudio"
                      onChange={(e) => {
                        setTipo(e.target.value);
                        calificarTitulo(e.target.value);
                      }}>
                      <option value="" selected disabled>Seleccione el grado académico</option>
                      <option value="maestria">Maestría</option>
                      <option value="doctorado">Doctorado, PhD o su equivalente</option>

                    </select>
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    id="puntuacionTitulo"
                    value={puntTitulo}
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td>Títulos Adicionales</td>
                <td>
                  {/* Ingrese la cantidad de títulos adicionales */}
                  <input
                    type="number"
                    id="titulosAdicionales" min="0" max="3"
                    onChange={(e) => {
                      setCantAdicionales(e.target.value);
                      calificarAdicional(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="puntuacionAdicionales"
                    value={puntAdicionales}
                    readonly
                  />
                </td>
              </tr>
              <tr>
                <td>Certificado de idiomas</td>
                <td>
                  {/* Ingrese la cantidad de títulos adicionales */}
                  <input
                    type="number"
                    id="titulosAdicionales" min="0" max="2"
                    onChange={(e) => {
                      setCantIdiomas(e.target.value);
                      calificarIdiomas(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="puntuacionAdicionales"
                    value={puntIdiomas}
                    readonly
                  />
                </td>
              </tr>
              <tr>
                <td>Horas de capacitación</td>
                <td>
                  {/* Ingrese la cantidad de títulos adicionales */}
                  <input
                    type="number"
                    id="capacitacion" min="128" max="192"
                    onChange={(e) => {
                      setHorasCapacitacion(e.target.value);
                      calificarCapacitacion(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="puntuacionAdicionales"
                    value={puntCapacitacion}
                    readonly
                  />
                </td>
              </tr>
              <tr>
                <td>Total de Puntuación</td>
                <td></td>
                <td>
                  <input
                    type="text"
                    id="totalFormacion"
                    value={totalFormacion}
                    readonly
                  />
                </td>
              </tr>
              <tr>
                <th colSpan={3} style={{ textAlign: 'left' }}>2. Docencia</th>
              </tr>
              <tr>
                <td>Puntuacion Evaluación Integral de Desempeño Docente</td>
                <td>
                  <input
                    type="number" id="valorExamen" min="0" max="100"
                    onChange={(e) => {
                      setPuntExamen(e.target.value);
                      calificarExamen(e.target.value);
                    }}
                  />
                  puntos
                </td>
                <td>
                  <input
                    type="text"
                    id="puntuacionEvaluacion"
                    value={puntEvaluacion}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td>Experiencia Profesional en docencia Universitaria</td>
                <td>
                  <input
                    type="number"
                    id="experienciaDocente" min="1" max="48"
                    onChange={(e) => {
                      setMesesExpDocente(e.target.value);
                      calificarExpDocente(e.target.value);
                    }}
                  />
                  meses
                </td>
                <td>
                  <input
                    type="text"
                    id="puntuacionDocencia"
                    value={puntExpDocente}
                  />
                </td>
              </tr>
              <tr>
                <td>Total de Puntuación</td>
                <td></td>
                <td>
                  <input
                    type="text"
                    id="puntuacionEvaluacion"
                    value={totalDocencia}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <th colSpan={3} style={{ textAlign: 'left' }}>3. Producción Académica</th>
              </tr>
              <tr>
                <td rowSpan={2}>Artículos Publicados</td>
                <td>
                  <div className="centered-selectarticulo">
                    Publicación 1
                    <br></br>
                    <select
                      id="tipoarticulo1"
                    >
                      <option value="" selected disabled>Seleccione el tipo de publicación</option>
                      <option value="Opcion1arti">Artículo completo o DOI</option>
                      <option value="Opcion2obra">Obras de relevancia</option>
                      <option value="Opcion3soli">Solicitud al Servicio Nacional de Derechos Intelectuales</option>
                    </select>
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    id="tituloPublicacion1"
                    placeholder="Ingrese el título de la publicación"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="centered-selectarticulo">
                    Publicación 2
                    <br></br>
                    <select
                      id="tipoarticulo2"
                    >
                      <option value="" selected disabled>Seleccione el tipo de publicación</option>
                      <option value="Opcion1arti">Artículo completo o DOI</option>
                      <option value="Opcion2obra">Obras de relevancia</option>
                      <option value="Opcion3soli">Solicitud al Servicio Nacional de Derechos Intelectuales</option>
                    </select>
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    id="tituloPublicacion2"
                    placeholder="Ingrese el título de la publicación"
                  />
                </td>
              </tr>
              <tr>
                <td>Artículos Adicionales</td>
                <td>
                  <input
                    type="number"
                    id="articulos" min="1" max="4"
                    onChange={(e) => {
                      setCantArticulos(e.target.value);
                      calificarPublicaciones(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="puntuacionArticulo"
                    value={puntArticulo}
                    readonly
                  />
                </td>
              </tr>
              <tr>
                <td>Total de Puntuación</td>
                <td></td>
                <td>
                  <input
                    type="text"
                    id="puntuacionEvaluacion"
                    value={totalProdAcademica}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <th colSpan={3} style={{ textAlign: 'left' }}>4. Experiencia Profesional</th>
              </tr>
              <tr>
                <td>Experiencia del ejercicio de la profesion</td>
                <td>
                  <div className="centered-selectmeses">
                    <input
                      type="number"
                      id="articulos" min="1" max="36"
                      onChange={(e) => {
                        setMesesExpProfesional(e.target.value);
                        calificarExpProfesional(e.target.value);
                      }}
                    />
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    id="puntuacionExpProfesional"
                    value={puntExpProfesional}
                    readonly
                  />
                </td>
              </tr>
              <tr>
                <td>Total de Puntuación</td>
                <td></td>
                <td>
                  <input
                    type="text"
                    id="puntuacionExpProfesional"
                    value={totalExpProfesional}
                    readonly
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1>Nota Final</h1>
        <table>
          <tr>
            <td>Valor del Nota Final : {notaFinal} puntos</td>
          </tr>
        </table>
        <br></br>
        <button onClick={handleClick} className="enviar-button">
          Enviar Puntuación
        </button>
      </div>
    </div>
  );
};

export default RecursosVerCandidato;
