import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../../routes/RecursosVerCandidato.css";
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Documentos = ({ documentos }) => {
  const [documentosFiltrados, setDocumentosFiltrados] = useState([]);

  useEffect(() => {
    const tiposDocumentosMap = new Map();
    const documentosArray = Object.values(documentos); // Convertir propiedades del objeto en un arreglo

    const filtrarDocumentos = () => {
      const documentosFiltrados = documentosArray.filter((documentos) => {
        const tipoDocumento = documentos.tipoDocumento;
        if (!tiposDocumentosMap.has(tipoDocumento)) {
          tiposDocumentosMap.set(tipoDocumento, true);
          return true;
        }
        return false;
      });
      setDocumentosFiltrados(documentosFiltrados);
    };
   
    filtrarDocumentos();
  }, [documentos]);
  console.log("Documentos Filtrados:", documentosFiltrados);

  const handleSubmit = async (cand_id, id_documento) => {
    try {
      const pdfUrl = `http://localhost:5000/pdfs/${cand_id}/${id_documento}`;
  
      // Abrir la URL en una nueva pestaña
      window.open(pdfUrl, '_blank');
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <>
      <h1>Documentos </h1>

      <table>
        <thead>
          <tr>
            <th className="first-column">Tipo de Documento</th>
            <th className="second-column">Documento</th>
            <th  className="third-column">Número de Hojas</th>
            <th className="fourd-column">Ver Documento</th>
          </tr>
        </thead>
        <tbody>
          {documentosFiltrados.map((documento) => (
            <tr key={documento.cand_id}>
              <td>{documento.tipoDocumento}</td>
              <td>{documento.id_documento}</td>
              <td>{documento.numPages}</td>
              <td>
                <button
                  onClick={() =>
                    handleSubmit(documento.cand_id, documento.id_documento)
                  }
                  className="yellow-button"
                >
                  <FontAwesomeIcon icon={faEye} /> {/* Icono de ojo */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </>
  );
};

export default Documentos;
