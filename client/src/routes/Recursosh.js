import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faPrint } from "@fortawesome/free-solid-svg-icons";
import NavpostAdmin from '../components/NavpostAdmin';
import axios from "axios";
import "./Recursosh.css";

const Recursosh = () => {

  const [personal, setPersonalID] = useState([]);
  const [personalName, setPersonalName] = useState([]);
  
  useEffect(() => {
    async function getPersonalID() {
      var personal = [];
      let aux = (await axios.get("http://localhost:5000/personal_academico")).data;
      for (let i = 0; i < aux.length; i++) {
        var pa_id = aux[i].pa_id;
        personal.push(<option>{pa_id}</option>);
      }
      setPersonalID(personal);
    }
    async function getPersonalName() {
      var personalName = [];
      let aux = (await axios.get("http://localhost:5000/personal_academico")).data;
      for (let i = 0; i < aux.length; i++) {
        var pa_nombre = aux[i].pa_nombre;
        personalName.push(<option>{pa_nombre}</option>);
      }
      setPersonalName(personalName);
    }
    getPersonalID();
    getPersonalName();
  }, []);

 
  const handleSendResults = () => {
    // Lógica para enviar los resultados
    alert("Resultados enviados con éxito");
  };

  return (
    <>
      <NavpostAdmin />
      <div className="offer-selector">
        <label htmlFor="offerSelect">Seleccione una oferta: </label>
        <select
          id="offerSelect"
          value={""}
          onChange = {""}
        >
          <option value="">Seleccione...</option>
          {personalName}
          
        </select>
      </div>
   
    </>
  );
};

export default Recursosh;
