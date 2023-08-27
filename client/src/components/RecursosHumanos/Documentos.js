import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "../../routes/RecursosVerCandidato.css";


const Documentos= ({cand_id, id_documento, tipoDocumento}) => {
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
      
      const handleSubmit = async (e) => {
        e.preventDefault();
      };
  return (
    <>
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
  </>
  );
};

export default Documentos;
