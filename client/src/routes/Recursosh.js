import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faPrint } from "@fortawesome/free-solid-svg-icons";
import NavpostAdmin from '../components/NavpostAdmin';
import "./Recursosh.css";

const Recursosh = () => {
  const initialData = [
    { id: 1, registroId: 12345, nombre: "John Doe", apellidos: "Doe", nombres: "John", titulo: "Licenciado en Informática", puntuacion: 95, opciones: "Aceptar", recursosHumanos: "María Pérez", estado: "Pendiente", oferta: 1 },
    { id: 2, registroId: 56789, nombre: "Jane Smith", apellidos: "Smith", nombres: "Jane", titulo: "Ingeniero Químico", puntuacion: 85, opciones: "Rechazar", recursosHumanos: "Carlos González", estado: "Rechazado", oferta: 2 },
    { id: 3, registroId: 96789, nombre: "Jane Smith", apellidos: "Smith", nombres: "Jane", titulo: "Ingeniero Químico", puntuacion: 85, opciones: "Rechazar", recursosHumanos: "Carlos González", estado: "Rechazado", oferta: 2 },
  ];

  const offers = [
    { id: 1, name: "Técnico Docente Nivel 1" },
    { id: 2, name: "Técnico de Laboratorio Nivel 1" },
    { id: 3, name: "Auxiliar Nivel 1" },
    { id: 4, name: "Agregado Nivel 1" },
    { id: 5, name: "Principal Nivel 1" },
    { id: 6, name: "Técnico de Investigación Nivel 1" },
    { id: 7, name: "Descripción del Personal Académico" },
  ];

  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleOfferSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedOffer(selectedValue !== "" ? parseInt(selectedValue) : null);
  };

  const filteredData = initialData.filter((item) => item.oferta === selectedOffer);

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
          value={selectedOffer || ""}
          onChange={handleOfferSelect}
        >
          <option value="">Seleccione...</option>
          {offers.map((offer) => (
            <option key={offer.id} value={offer.id}>
              {offer.name}
            </option>
          ))}
        </select>
      </div>
      {selectedOffer !== null && (
        <div className="table-container">
          <h1>Tabla de Postulaciones</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Nombres</th>
                <th>Título</th>
                <th>Puntuación</th>
                <th>Opciones</th>
                <th>Recursos Humanos</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.apellidos}</td>
                  <td>{item.nombres}</td>
                  <td>{item.titulo}</td>
                  <td>{item.puntuacion}</td>
                  <td>
                    <div className="btn-container">
                      <button className="green-button">
                        <FontAwesomeIcon icon={faCheck} />
                      </button>
                      <button className="red-button">
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                      <button className="yellow-button">
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </button>
                    </div>
                  </td>
                  <td>{item.recursosHumanos}</td>
                  <td>{item.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {selectedOffer !== null && (
        <div className="send-results">
          <button className="send-results-button" onClick={handleSendResults}>
            Enviar Resultados
          </button>
        </div>
      )}
    </>
  );
};

export default Recursosh;
