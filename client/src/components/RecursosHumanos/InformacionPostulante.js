import React, { useState } from "react";
import "../../routes/RecursosVerCandidato.css";


const InformacionPostulante= ({candidatosData}) => {
    
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

  return (
    <>
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
  </>
  );
};

export default InformacionPostulante;
