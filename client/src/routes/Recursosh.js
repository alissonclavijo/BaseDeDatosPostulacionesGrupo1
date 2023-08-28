import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faInfoCircle,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import NavpostAdmin from "../components/NavpostAdmin";
import "./Recursosh.css";
import { useNavigate } from "react-router-dom";

import {
  getSolicitud,
  getPersonalID,
  getPersonalName,
  getOfertas,
  fetchCandidatos,
  Postulacion,
  Contratacion,
  Actividad,
  Sedes,
  Departamento,
  campoAmplio,
  campoEspecifico,
  Solicitud,
  getDocumentos,
} from "../services/api";
import axios from "axios";
import swal from "sweetalert";

const Recursosh = () => {
  const [solicitud, setSolicitud] = useState({});
  const [personal, setPersonalID] = useState([]);
  const [personalName, setPersonalName] = useState([]);
  const [ofertas, setOfertas] = useState([]);
  const [candidatosData, setCandidatosData] = useState([]);
  const [postulacion, setPostulacion] = useState([]);
  const [contratacion, setContratacion] = useState([]);
  const [actividad, setActividad] = useState([]);
  const [sedes, setSedes] = useState([]);
  const [campoamplio, setCampoamplio] = useState([]);
  const [campoespecifico, setCampoespecifico] = useState([]);
  const [departamento, setDepartamento] = useState([]);
  const navigate = useNavigate();

  const [botonVerificado, setBotonVerificado] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setSolicitud(await getSolicitud());
      setPersonalID(await getPersonalID());
      setPersonalName(await getPersonalName());
      setOfertas(await getOfertas());
      const candidatos = await fetchCandidatos();
      setCandidatosData(candidatos);
      const postulacion = await Postulacion();
      setPostulacion(postulacion);
      const contratacion = await Contratacion();
      setContratacion(contratacion);
      const actividad = await Actividad();
      setActividad(actividad);
      const sedes = await Sedes();
      setSedes(sedes);
      setPostulacion(postulacion);
      const departamento = await Departamento();
      setContratacion(departamento);
      const campoamplio = await campoAmplio();
      setActividad(campoamplio);
      const campoespecifico = await campoEspecifico();
      setCampoespecifico(campoespecifico);
      const solicitud = await Solicitud();
      setSolicitud(solicitud);

    }

    fetchData();
  }, []);

  const handleSubmitAceptado = async (candId, notaFinal) => {
    try {
      const response = await axios.put(`http://localhost:5000/solicitudes/${candId}`, { nota_final: notaFinal, estado: true });
      console.log('Solicitud actualizada:', response.data);
      swal({
        title: '',
        content: {
          element: "div",
          attributes: {
            innerHTML: `Se ha cargado correctamente el estado Aceptado<br/>`,
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

  const handleSubmitRechazado = async (candId, notaFinal) => {
    try {
      const response = await axios.put(`http://localhost:5000/solicitudes/${candId}`, { nota_final: notaFinal, estado: false });
      console.log('Solicitud actualizada:', response.data);
      swal({
        title: '',
        content: {
          element: "div",
          attributes: {
            innerHTML: `Se ha cargado correctamente el estado Rechazado<br/>`,
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

  const handleContinue = (candidatosData) => {

    navigate("/recursosvercandidato", { state: candidatosData });
  };

  return (
    <>
      <NavpostAdmin />

      <div className="offer-selector">

        <h1>Seleccion de Postulantes</h1>
        <div className="table-containerRecursos">
          <table>
            <thead>
              <tr>
                <th className="textRecursos">Cédula</th>
                <th className="textRecursos">Nombre y Apellido</th>
                <th className="textRecursos">Título</th>
                <th className="textRecursos">Puntuaciones</th>
                <th className="textRecursos">Evaluar </th>
                <th className="textRecursos">Estado</th>
                <th className="textRecursos">Selección</th>
              </tr>
            </thead>
            <tbody>
              {candidatosData.map((candidato) => {
                // Buscar la solicitud correspondiente en la tabla de solicitudes
                const solicitudCorrespondiente = solicitud.find(
                  (solicitud) => solicitud.cand_id === candidato.cand_id
                );

                // Obtener la nota_final de la solicitud correspondiente
                const notaFinal = solicitudCorrespondiente
                  ? solicitudCorrespondiente.nota_final
                  : "";

                // Obtener el estado de verificación de la solicitud correspondiente
                const estadoVerificacion = solicitudCorrespondiente
                  ? solicitudCorrespondiente.sol_aprobacion
                  : false;
                const estadoTexto = estadoVerificacion
                  ? "Aceptado"
                  : solicitudCorrespondiente && !solicitudCorrespondiente.sol_aprobacion
                    ? "Rechazado"
                    : "Pendiente";

                return (
                  <tr key={candidato.cand_num_identificacion}>
                    <td>{candidato.cand_num_identificacion}</td>
                    <td>{`${candidato.cand_nombre1} ${candidato.cand_apellido1}`}</td>
                    <td>{candidato.cand_titulo}</td>
                    <td>{notaFinal}</td> {/* Mostrar la nota_final aquí */}
                    <td>
                      <div className="btn-container">
                        <button
                          onClick={() => handleContinue(candidato)}
                          className="buttonPostulacion"
                        >
                          <FontAwesomeIcon icon={faInfoCircle} />
                        </button>
                      </div>
                    </td>
                    <td>{estadoTexto}</td>{" "}
                    <td>
                      <button
                        onClick={() => handleSubmitAceptado(candidato.cand_id, notaFinal)}
                        className="green-button"
                      >
                        <FontAwesomeIcon icon={faCheck} />
                      </button>
                      <button
                        onClick={() => handleSubmitRechazado(candidato.cand_id, notaFinal)}
                        className="red-button"
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Recursosh;