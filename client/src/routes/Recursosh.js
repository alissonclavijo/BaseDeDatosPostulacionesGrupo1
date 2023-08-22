import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faInfoCircle,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import NavpostAdmin from "../components/NavpostAdmin";
import axios from "axios";
import "./Recursosh.css";
import { useNavigate } from "react-router-dom";

const Recursosh = () => {
  const [personal, setPersonalID] = useState([]);
  const [personalName, setPersonalName] = useState([]);
  const [ofertas, setOfertas] = useState([]);
  const [candidatosData, setCandidatosData] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    async function getPersonalID() {
      var personal = [];
      let aux = (await axios.get("http://localhost:5000/personal_academico"))
        .data;
      for (let i = 0; i < aux.length; i++) {
        var pa_id = aux[i].pa_id;
        personal.push(<option>{pa_id}</option>);
      }
      setPersonalID(personal);
    }
    async function getPersonalName() {
      var personalName = [];
      let aux = (await axios.get("http://localhost:5000/personal_academico"))
        .data;
      for (let i = 0; i < aux.length; i++) {
        var pa_nombre = aux[i].pa_nombre;
        personalName.push(<option>{pa_nombre}</option>);
      }
      setPersonalName(personalName);
    }
    async function getOfertas() {
      var ofertas = [];
      let aux = (await axios.get("http://localhost:5000/ofertas")).data;
      for (let i = 0; i < aux.length; i++) {
        var pa_id = aux[i].pa_id;
        ofertas.push(<option>{pa_id}</option>);
      }
      setOfertas(ofertas);
    }
    const fetchCandidatos = async () => {
      try {
        const result = await axios.get("http://localhost:5000/candidatos");
        // Aquí puedes hacer lo que necesites con los datos de candidatos
        setCandidatosData(result.data);
      } catch (error) {
        console.error("Error al obtener datos de candidatos:", error);
      }
    };

    fetchCandidatos();
    getOfertas();
    getPersonalID();
    getPersonalName();
  }, []);

  const handleSubmit = () => {
    // Lógica para enviar los resultados
    alert("Resultados enviados con éxito");
  };
  const handleContinue = () => {
    // Lógica para enviar los resultados
    navigate("/recursosvercandidato")
  };

  return (
    <>
      <NavpostAdmin />
      <div className="offer-selector">
        <label htmlFor="offerSelect">Seleccione una oferta: </label>
        <select id="offerSelect" value={""} onChange={""}>
          <option value="">Seleccione...</option>
          {personalName}
        </select>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Cédula</th>
                <th>Nombre y Apellido</th>
                <th>Título</th>
                <th>Puntuaciones</th>
                <th>Opciones</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {candidatosData.map((candidatosData) => (
                <tr key={candidatosData.cand_num_identificacion}>
                  <td>{candidatosData.cand_num_identificacion}</td>
                  <td>{`${candidatosData.cand_nombre1} ${candidatosData.cand_apellido1}`}</td>
                  <td>{candidatosData.cand_titulo}</td>
                  <td></td>
                  <td>
                  <div className="btn-container">
                      <button onClick={handleSubmit} className="green-button">
                        <FontAwesomeIcon icon={faCheck} />
                      </button>
                      <button onClick={handleSubmit} className="red-button">
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                      <button onClick={handleContinue} className="yellow-button">
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </button>
                    </div>
                  </td>
                  <td>Pendiente</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Recursosh;
