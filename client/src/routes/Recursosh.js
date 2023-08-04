import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faPrint } from "@fortawesome/free-solid-svg-icons";
import "./Recursosh.css";

const Recursosh = () => {
  const initialData = [
    { id: 1, registroId: 12345, nombre: "John Doe", telefono: "555-123-4567", direccion: "123 Main St", ciudad: "New York", status: "Aprobado" },
    { id: 2, registroId: 56789, nombre: "Jane Smith", telefono: "555-987-6543", direccion: "456 Elm St", ciudad: "Los Angeles", status: "Pendiente" },
    { id: 3, registroId: 24680, nombre: "Mike Johnson", telefono: "555-555-5555", direccion: "789 Oak St", ciudad: "Chicago", status: "Rechazado" },
    { id: 4, registroId: 13579, nombre: "Lisa Williams", telefono: "555-222-3333", direccion: "987 Maple St", ciudad: "Miami", status: "Aprobado" },
    { id: 5, registroId: 10293, nombre: "Robert Lee", telefono: "555-444-7777", direccion: "321 Pine St", ciudad: "San Francisco", status: "Pendiente" },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-container">
      <br />
      <h1>Tabla de Postulaciones</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Buscar..."
          className="search-input"
        />
         <FontAwesomeIcon icon={faPrint} className="print-icon" />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Registro ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>Status</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.registroId}</td>
              <td>{item.nombre}</td>
              <td>{item.telefono}</td>
              <td>{item.direccion}</td>
              <td>{item.ciudad}</td>
              <td>{item.status}</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recursosh;
