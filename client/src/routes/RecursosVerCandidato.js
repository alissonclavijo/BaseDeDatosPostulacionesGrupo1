import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import NavpostAdmin from "../components/NavpostAdmin";
import "./RecursosVerCandidato.css";
import { useLocation } from "react-router-dom";
import {
  getTituloExp,
} from "../services/api";

const RecursosVerCandidato = () => {
  const [titulo, setTituloExp] = useState([]);

  const location = useLocation();
  const candidatosData = location.state;
  const postulacion = location.state;
  const contratacion = location.state;
  const actividad = location.state;
  const sedes = location.state;
  const departamento = location.state;
  const campoamplio = location.state;
  const campoespecifico = location.state;

  useEffect(() => {
    async function fetchData() {
      setTituloExp(await getTituloExp());   
    }

    fetchData();
  }, []);

  const [applicantInfo, setApplicantInfo] = useState({
    cedula: candidatosData.cand_num_identificacion,
    nombres: `${candidatosData.cand_nombre1} ${candidatosData.cand_nombre2}`,
    apellidos: `${candidatosData.cand_apellido1} ${candidatosData.cand_apellido2}`,
    titulo: candidatosData.cand_titulo,
    correo: candidatosData.cand_correo,
    sexo: candidatosData.cand_sexo,
    fechaNacimiento: new Date(
      candidatosData.cand_fecha_nacimiento
    ).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  });

  const [applications, setApplications] = useState([
    {
      postulacion: postulacion.post_periodo = "2023-2024",
      contrato: contratacion.con_nombre = "Personal academico",
      actividad: actividad.act_nombre = "Docencia",
      sede: sedes.sede_nombre = "Matriz",
      departamento: departamento.dept_nombre = "DCCO",
      campoAmplio: campoamplio.ca_nombre = "Ciencias de la Computación",
      campoEspecifico: campoespecifico.ce_nombre="Algebra Lineal" ,
    },
    // Agregar más aplicaciones aquí si es necesario
  ]);

  const [documents, setDocuments] = useState([
    {
      id: 1,
      tipoDocumento: "Hoja de vida formato ESPE",
      nombreDocumento: "hojadevida.pdf",
      numeroHojas: 5,
    },
    {
      id: 2,
      tipoDocumento: "Copia de cédula",
      nombreDocumento: "CedulaPerez.docx",
      numeroHojas: 3,
    },
    {
      id: 3,
      tipoDocumento: "Certificado de votación",
      nombreDocumento: "CertificadoPerez.docx",
      numeroHojas: 6,
    },
    {
      id: 4,
      tipoDocumento: "Certificado de registro de título",
      nombreDocumento: "CertificadoRegistroPerez.docx",
      numeroHojas: 1,
    },
    {
      id: 5,
      tipoDocumento: "Experiencia de docente",
      nombreDocumento: "ExperienciaPerez.docx",
      numeroHojas: 5,
    },
    {
      id: 6,
      tipoDocumento: "Certificado de no tener Impedimentos",
      nombreDocumento: "CertifiacoImpedimentosPerez.docx",
      numeroHojas: 4,
    },
    {
      id: 7,
      tipoDocumento:
        "Certificado de no tener responsabilidades administrativas",
      nombreDocumento: "CertifiacoImpedimentosPerez.docx",
      numeroHojas: 4,
    },
    {
      id: 8,
      tipoDocumento: "Experiencia profesional",
      nombreDocumento: "ExperienciaPerez.docx",
      numeroHojas: 4,
    },
  ]);

  const [formacion, setFormacion] = useState({
    tipo: "Maestría",
    puntuacionTitulo: "",
    puntuacionAdicional: "",
  });

  const [formacion1, setFormacion2] = useState({
    tipoarticulo: "Opcion1arti",
    puntuacionMeses: "",
  });

  const [formacion2, setFormacion3] = useState({
    tipomeses: "Opcions1",
    puntuacionMeses: "",
  });

  const handleFormacionChange = (event) => {
    const { name, value } = event.target;
    setFormacion((prevFormacion) => ({
      ...prevFormacion,
      [name]: value,
    }));
  };

  const handleFormacionChange2 = (event) => {
    const { name, value } = event.target;
    setFormacion2((prevFormacion) => ({
      ...prevFormacion,
      [name]: value,
    }));
  };

  const handleFormacionChange3 = (event) => {
    const { name, value } = event.target;
    setFormacion3((prevFormacion) => ({
      ...prevFormacion,
      [name]: value,
    }));
  };

const handleSubmit = async (e) =>{
  e.preventDefault();
  
}

  return (
    <div>
      <NavpostAdmin />
      <div className="table-container">
        <div className="applicant-info">
          <br></br>
          <h1>Información del Postulante</h1>
          <br></br>

          <div className="applicant-details">
            <div className="column">
              <div className="subcolumn">
                <p>
                  <strong className="label">Cédula:</strong>
                </p>
              </div>
              <div className="subcolumn">
                <p>
                  <span className="info">{applicantInfo.cedula}</span>
                </p>
              </div>
              <div className="subcolumn">
                <p>
                  <strong className="label">Nombres:</strong>
                </p>
              </div>
              <div className="subcolumn">
                <p>
                  <span className="info">{applicantInfo.nombres}</span>
                </p>
              </div>
              <div className="subcolumn">
                <p>
                  <strong className="label">Apellidos:</strong>
                </p>
              </div>
              <div className="subcolumn">
                <p>
                  <span className="info">{applicantInfo.apellidos}</span>
                </p>
              </div>
              <div className="subcolumn">
                <p>
                  <strong className="label">Sexo:</strong>
                </p>
              </div>
              <div className="subcolumn">
                <p>
                  <span className="info">{applicantInfo.sexo}</span>
                </p>
              </div>
            </div>
            <div className="column">
              <div className="subcolumn">
                <p>
                  <strong className="label">Título:</strong>
                </p>
              </div>
              <div className="subcolumn">
                <p>
                  <span className="info">{applicantInfo.titulo}</span>
                </p>
              </div>
              <div className="subcolumn">
                <p>
                  <strong className="label">Correo:</strong>
                </p>
              </div>
              <div className="subcolumn">
                <p>
                  <span className="info">{applicantInfo.correo}</span>
                </p>
              </div>
              <div className="subcolumn">
                <p>
                  <strong className="label">Fecha de Nacimiento:</strong>
                </p>
              </div>
              <div className="subcolumn">
                <p>
                  <span className="info">{applicantInfo.fechaNacimiento}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <h1>Postulación </h1>
        <table>
          <thead>
            <tr>
              <th>Postulación</th>
              <th>Contrato</th>
              <th>Actividad</th>
              <th>Sede</th>
              <th>Departamento</th>
              <th>Campo Amplio</th>
              <th>Campo Específico</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application.id}>
                <td>{application.postulacion}</td>
                <td>{application.contrato}</td>
                <td>{application.actividad}</td>
                <td>{application.sede}</td>
                <td>{application.departamento}</td>
                <td>{application.campoAmplio}</td>
                <td>{application.campoEspecifico}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <h1>Documentos </h1>
        <table>
          <thead>
            <tr>
              <th>Tipo de Documento</th>
              <th>Documento</th>
              <th>Número de Hojas</th>
              <th>Descargar</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((document) => (
              <tr key={document.id}>
                <td>{document.tipoDocumento}</td>
                <td>{document.nombreDocumento}</td>
                <td>{document.numeroHojas}</td>
                <td>
                  <button onClick={handleSubmit} className="yellow-button">
                    <FontAwesomeIcon icon={faDownload} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <div className="titulos-container">
          <h1>Ponderación</h1>
          <table>
            <thead>
              <tr>
                <th>Formación</th>
                <th>Tipo</th>
                <th>Puntuación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Títulos</td>
                <td>
                  <div className="centered-select">
                    <select
                      name="tipo"
                      value={formacion.tipo}
                      onChange={handleFormacionChange}
                    >
                     <option value="">Seleccione...</option>
                       {titulo}
                    </select>
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    name="puntuacionTitulo"
                    value={formacion.puntuacionTitulo}
                    onChange={handleFormacionChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Títulos Adicionales</td>
                <td>
                  <input
                    type="text"
                    name="puntuacionAdicional"
                    value={formacion.puntuacionAdicional}
                    onChange={handleFormacionChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="puntuacionAdicional"
                    value={formacion.puntuacionAdicional}
                    onChange={handleFormacionChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Total de Puntuación</td>
                <td></td>
                <td>
                  {parseInt(formacion.puntuacionTitulo) +
                    parseInt(formacion.puntuacionAdicional)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <div className="docencia-container">
          <h1>Docencia</h1>
          <table>
            <thead>
              <tr>
                <th>Puntuacion Examen Docencia</th>
                <th>Puntaje / Tiempo</th>
                <th>Puntuación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Puntuacion Examen Docencia</td>
                <td>
                  <input
                    type="text"
                    name="puntuacionTitulo"
                    value={formacion.puntuacionTitulo}
                    onChange={handleFormacionChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="puntuacionAdicional"
                    value={formacion.puntuacionAdicional}
                    onChange={handleFormacionChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Experiencia Profesional en docencia Universitaria</td>
                <td>
                  <input
                    type="text"
                    name="puntuacionTitulo"
                    value={formacion.puntuacionTitulo}
                    onChange={handleFormacionChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="puntuacionAdicional"
                    value={formacion.puntuacionAdicional}
                    onChange={handleFormacionChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Total de Puntuación</td>
                <td></td>
                <td>
                  {parseInt(formacion.puntuacionTitulo) +
                    parseInt(formacion.puntuacionAdicional)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <div className="produccionAcademica-container">
          <h1>Producción Académica</h1>
          <table>
            <thead>
              <tr>
                <th>Produccion Academica</th>
                <th>Articulos / Obras</th>
                <th>Puntuación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Artículos Publicados</td>
                <td>
                  <div className="centered-selectarticulo">
                    <select
                      name="tipoarticulo"
                      value={formacion.tipoarticulo}
                      onChange={handleFormacionChange2}
                    >
                      <option value="Opcion1arti">
                        Artículo completo o DOI
                      </option>
                      <option value="Opcion2obra">Obras de relevancia</option>
                      <option value="Opcion3soli">
                        Solicitud al Servicio Nacional de Derechos Intelectuales
                      </option>
                    </select>
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    name="puntuacionTitulo"
                    value={formacion.puntuacionTitulo}
                    onChange={handleFormacionChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Total de Puntuación</td>
                <td></td>
                <td>
                  {parseInt(formacion.puntuacionTitulo) +
                    parseInt(formacion.puntuacionAdicional)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <div className="experienciaProfesional-container">
          <h1>Experiencia Profesional</h1>
          <table>
            <thead>
              <tr>
                <th>Experiencia Profesional</th>
                <th>Detalle / Tiempo</th>
                <th>Puntuación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Experiencia del ejercicio de la profesion</td>
                <td>
                  <div className="centered-selectmeses">
                    <select
                      name="tipomeses"
                      value={formacion.tipomeses}
                      onChange={handleFormacionChange3}
                    >
                      <option value="Opcions1">12 - 16 meses</option>
                      <option value="Opcions2">17 - 21 meses</option>
                      <option value="Opcions3">22 - 26 meses</option>
                      <option value="Opcions4">27 - 31 meses</option>
                      <option value="Opcions5">32 - 36 meses</option>
                    </select>
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    name="puntuacionTitulo"
                    value={formacion.puntuacionTitulo}
                    onChange={handleFormacionChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Total de Puntuación</td>
                <td></td>
                <td>
                  {parseInt(formacion.puntuacionTitulo) +
                    parseInt(formacion.puntuacionAdicional)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <button className="enviar-button">Enviar Puntuación</button>
      </div>
    </div>
  );
};

export default RecursosVerCandidato;
