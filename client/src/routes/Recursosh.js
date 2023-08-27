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
} from "../services/api";

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

  const handleSubmit = () => {
    // Lógica para enviar los resultados
    alert("Resultados enviados con éxito");
  };
  const handleContinue = (candidatosData) => {
    // Lógica para enviar los resultados
    navigate("/recursosvercandidato", { state: candidatosData });
  };

  return (
    <>
      <NavpostAdmin />

      <div className="offer-selector">
       
        <h1>Seleccion de Postulantes</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Cédula</th>
                <th>Nombre y Apellido</th>
                <th>Título</th>
                <th>Puntuaciones</th>
                <th>Evaluar </th>
                <th>Estado</th>
                <th>Selección</th>
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
                  ? "Verificada"
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
                          className="yellow-button"
                        >
                          <FontAwesomeIcon icon={faInfoCircle} />
                        </button>
                      </div>
                    </td>
                    <td>{estadoTexto}</td>{" "}
                    <td>
                    <button onClick={handleSubmit} className="green-button">
                          <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button onClick={handleSubmit} className="red-button">
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
