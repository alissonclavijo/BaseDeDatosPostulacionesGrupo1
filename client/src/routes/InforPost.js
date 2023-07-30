import React, { useState } from 'react'
import './InfoPost.css'
import ArchivoInput from '../components/ArchivoInput';
import NumeroHojasInput from '../components/NumeroHojasInput';
import Navpost from '../components/Navpost';

function InforPost() {
  const [archivoSeleccionado, setArchivoSeleccionado] = useState(null);

  const handleArchivoSeleccionado = (archivo) => {
    setArchivoSeleccionado(archivo);
  };

  return (
    <>
      <div className='body'>
        <Navpost/>

          <div className="container-inf">
          <h5 className='lab'>#</h5>
            <div className="input-container">
              <ArchivoInput label="Hoja de vida formato ESPE" onArchivoSeleccionado={handleArchivoSeleccionado} />
              <NumeroHojasInput archivo={archivoSeleccionado} />
            </div>

            <div className="input-container">
              <ArchivoInput label="Copia de cédula" onArchivoSeleccionado={handleArchivoSeleccionado} />
              <NumeroHojasInput archivo={archivoSeleccionado} />
            </div>

            <div className="input-container">
              <ArchivoInput label="Certificado de votación" onArchivoSeleccionado={handleArchivoSeleccionado} />
              <NumeroHojasInput archivo={archivoSeleccionado} />
            </div>

            <div className="input-container">
              <ArchivoInput label="Certificado de registro de título" onArchivoSeleccionado={handleArchivoSeleccionado} />
              <NumeroHojasInput archivo={archivoSeleccionado} />
            </div>
            <div className="input-container">
              <ArchivoInput label="Experiencia de docente" onArchivoSeleccionado={handleArchivoSeleccionado} />
              <NumeroHojasInput archivo={archivoSeleccionado} />
            </div>

            <div className="input-container">
              <ArchivoInput label="Certificado de no tener impedimento de ejercer cargo público" onArchivoSeleccionado={handleArchivoSeleccionado} />
              <NumeroHojasInput archivo={archivoSeleccionado} />
            </div>

            <div className="input-container">
              <ArchivoInput label="Certificado de no tener responsabilidades administrativas" onArchivoSeleccionado={handleArchivoSeleccionado} />
              <NumeroHojasInput archivo={archivoSeleccionado} />
            </div>

            <div className="input-container">
              <ArchivoInput label="Experiencia profesional" onArchivoSeleccionado={handleArchivoSeleccionado} />
              <NumeroHojasInput archivo={archivoSeleccionado} />
            </div>

          </div>
      </div>
    </>
  );
};

export default InforPost