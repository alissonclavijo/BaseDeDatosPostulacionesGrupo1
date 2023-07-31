import React, { useState } from 'react';
import './InfoPost.css';
import ArchivoInput from '../components/ArchivoInput';
import NumeroHojasInput from '../components/NumeroHojasInput';
import Navpost from '../components/Navpost';

function InforPost() {
  const [archivoSeleccionadoHojaVida, setArchivoSeleccionadoHojaVida] = useState(null);
  const [archivoSeleccionadoCedula, setArchivoSeleccionadoCedula] = useState(null);
  const [archivoSeleccionadoVotacion, setArchivoSeleccionadoVotacion] = useState(null);
  const [archivoSeleccionadoTitulo, setArchivoSeleccionadoTitulo] = useState(null);
  const [archivoSeleccionadoDocente, setArchivoSeleccionadoDocente] = useState(null);
  const [archivoSeleccionadoPublico, setArchivoSeleccionadoPublico] = useState(null);
  const [archivoSeleccionadoAdministrativa, setArchivoSeleccionadoAdministrativa] = useState(null);
  const [archivoSeleccionadoProfesional, setArchivoSeleccionadoProfesional] = useState(null);


  const handleArchivoSeleccionadoHojaVida = (archivo) => {
    setArchivoSeleccionadoHojaVida(archivo);
  };

  const handleArchivoSeleccionadoCedula = (archivo) => {
    setArchivoSeleccionadoCedula(archivo);
  };
  const handleArchivoSeleccionadoVotacion = (archivo) => {
    setArchivoSeleccionadoVotacion(archivo);
  };

  const handleArchivoSeleccionadoTitulo= (archivo) => {
    setArchivoSeleccionadoTitulo(archivo);
  };
  const handleArchivoSeleccionadoDocente = (archivo) => {
    setArchivoSeleccionadoDocente(archivo);
  };

  const handleArchivoSeleccionadoPublico = (archivo) => {
    setArchivoSeleccionadoPublico(archivo);
  };
  const handleArchivoSeleccionadoAdministrativa = (archivo) => {
    setArchivoSeleccionadoAdministrativa(archivo);
  };

  const handleArchivoSeleccionadoProfesional= (archivo) => {
    setArchivoSeleccionadoProfesional(archivo);
  };
  // Agrega más funciones de manejo de archivos según sea necesario

  return (
    <>
      <div className='body'>
        <Navpost />
        <h1>Información</h1>
        <div className='container-inf'>
        <h5 className='lab'> Num Hojas</h5>
          {/* Hoja de vida formato ESPE */}
          <div className='input-container'>
            <ArchivoInput label='Hoja de vida formato ESPE' onArchivoSeleccionado={handleArchivoSeleccionadoHojaVida} />
            <NumeroHojasInput archivo={archivoSeleccionadoHojaVida} etiqueta='Hoja de vida' />
          </div>

          {/* Copia de cédula */}
          <div className='input-container'>
            <ArchivoInput label='Copia de cédula' onArchivoSeleccionado={handleArchivoSeleccionadoCedula} />
            <NumeroHojasInput archivo={archivoSeleccionadoCedula} etiqueta='Copia de cédula' />
          </div>

          {/* Hoja de vida formato ESPE */}
          <div className='input-container'>
            <ArchivoInput label='Certificado de votación' onArchivoSeleccionado={handleArchivoSeleccionadoVotacion} />
            <NumeroHojasInput archivo={archivoSeleccionadoVotacion} etiqueta='Hoja de vida' />
          </div>

          {/* Copia de cédula */}
          <div className='input-container'>
            <ArchivoInput label='Certificado de registro de título' onArchivoSeleccionado={handleArchivoSeleccionadoTitulo} />
            <NumeroHojasInput archivo={archivoSeleccionadoTitulo} etiqueta='Copia de cédula' />
          </div>

          {/* Hoja de vida formato ESPE */}
          <div className='input-container'>
            <ArchivoInput label='Experiencia de docente' onArchivoSeleccionado={handleArchivoSeleccionadoDocente}/>
            <NumeroHojasInput archivo={archivoSeleccionadoDocente} etiqueta='Hoja de vida' />
          </div>

          {/* Copia de cédula */}
          <div className='input-container'>
            <ArchivoInput label='Certificado de no tener impedimento de ejercer cargo público' onArchivoSeleccionado={handleArchivoSeleccionadoPublico} />
            <NumeroHojasInput archivo={archivoSeleccionadoPublico} etiqueta='Copia de cédula' />
          </div>

          {/* Hoja de vida formato ESPE */}
          <div className='input-container'>
            <ArchivoInput label='Certificado de no tener responsabilidades administrativas' onArchivoSeleccionado={handleArchivoSeleccionadoAdministrativa} />
            <NumeroHojasInput archivo={archivoSeleccionadoAdministrativa} etiqueta='Hoja de vida' />
          </div>

          {/* Copia de cédula */}
          <div className='input-container'>
            <ArchivoInput label='Experiencia profesional' onArchivoSeleccionado={handleArchivoSeleccionadoProfesional} />
            <NumeroHojasInput archivo={archivoSeleccionadoCedula} etiqueta='Copia de cédula' />
          </div>


        </div>
      </div>
    </>
  );
}

export default InforPost;
