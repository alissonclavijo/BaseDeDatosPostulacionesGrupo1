import React, { useState } from "react";
import "../../routes/RecursosVerCandidato.css";


const Postulacion= ({postulacion, contratacion, actividad, sedes, departamento, campoamplio, campoespecifico}) => {
    const [applications, setApplications] = useState([
        {
          postulacion: (postulacion.post_periodo = "2023-2024"),
          contrato: (contratacion.con_nombre = "Personal academico"),
          actividad: (actividad.act_nombre = "Docencia"),
          sede: (sedes.sede_nombre = "Matriz"),
          departamento: (departamento.dept_nombre = "DCCO"),
          campoAmplio: (campoamplio.ca_nombre = "Ciencias de la Computación"),
          campoEspecifico: (campoespecifico.ce_nombre = "Algebra Lineal"),
        },
        // Agregar más aplicaciones aquí si es necesario
      ]);
   
  return (
    <>
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
  </>
  );
};

export default Postulacion;
