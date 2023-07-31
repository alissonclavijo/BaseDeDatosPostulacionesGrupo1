import React, { useState } from 'react';
import './InfoPost.css';
import ArchivoInput from '../components/ArchivoInput';
import NumeroHojasInput from '../components/NumeroHojasInput';
import Navpost from '../components/Navpost';
import swal from 'sweetalert'
import { Link } from 'react-router-dom';


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

  

  const mostrarAlerta = () => {
    // Verificar si todos los campos están llenos
    if (
      !archivoSeleccionadoHojaVida ||
      !archivoSeleccionadoCedula ||
      !archivoSeleccionadoVotacion ||
      !archivoSeleccionadoTitulo ||
      !archivoSeleccionadoDocente ||
      !archivoSeleccionadoPublico ||
      !archivoSeleccionadoAdministrativa ||
      !archivoSeleccionadoProfesional
    ) {
      swal({
        title: 'Advertencia!!',
        text: 'Por favor, complete todos los campos del formulario antes de confirmar la postulación.',
        icon: 'warning',
        button: 'Aceptar',
      });
    } else {
      // Si todos los campos están llenos, mostrar mensaje de confirmación
      swal({
        title: 'Advertencia!!',
        text:
          'Esta seguro que los datos enviados son los correctos, estos datos serán enviados y posteriormente no podrán ser modificados. Si envia cualquier documento de manera erronea puede ser descalificado del concurso.',
        icon: 'warning',
        buttons: ['No', 'Si'],
      }).then((respuesta) => {
        if (respuesta) {
          swal({
            text: 'Datos subidos correctamente',
            icon: 'success',
            button:'Salir'

          });
        }
      });
    }
  };

  return (
    <>
      <div className='body'>
        <Navpost />
        <h1>Información</h1>
        <div className='container-inf'>
        <h5 className='lab'>Núm Páginas</h5>
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

          {/*Certificado de votación*/}
          <div className='input-container'>
            <ArchivoInput label='Certificado de votación' onArchivoSeleccionado={handleArchivoSeleccionadoVotacion} />
            <NumeroHojasInput archivo={archivoSeleccionadoVotacion} etiqueta='Certificado de votación' />
          </div>

          {/*Certificado de registro de título*/}
          <div className='input-container'>
            <ArchivoInput label='Certificado de registro de título' onArchivoSeleccionado={handleArchivoSeleccionadoTitulo} />
            <NumeroHojasInput archivo={archivoSeleccionadoTitulo} etiqueta='Certificado de registro de título' />
          </div>

          {/* Experiencia de docente */}
          <div className='input-container'>
            <ArchivoInput label='Experiencia de docente' onArchivoSeleccionado={handleArchivoSeleccionadoDocente}/>
            <NumeroHojasInput archivo={archivoSeleccionadoDocente} etiqueta='Experiencia de docente' />
          </div>

          {/* Certificado de no tener impedimento de ejercer cargo público */}
          <div className='input-container'>
            <ArchivoInput label='Certificado de no tener impedimento de ejercer cargo público' onArchivoSeleccionado={handleArchivoSeleccionadoPublico} />
            <NumeroHojasInput archivo={archivoSeleccionadoPublico} etiqueta='Certificado de no tener impedimento de ejercer cargo público' />
          </div>

          {/* Certificado de no tener responsabilidades administrativas */}
          <div className='input-container'>
            <ArchivoInput label='Certificado de no tener responsabilidades administrativas' onArchivoSeleccionado={handleArchivoSeleccionadoAdministrativa} />
            <NumeroHojasInput archivo={archivoSeleccionadoAdministrativa} etiqueta='Certificado de no tener responsabilidades administrativas' />
          </div>

          {/* Experiencia profesional */}
          <div className='input-container'>
            <ArchivoInput label='Experiencia profesional' onArchivoSeleccionado={handleArchivoSeleccionadoProfesional} />
            <NumeroHojasInput archivo={archivoSeleccionadoProfesional} etiqueta='Experiencia profesional' />
          </div>

          <button onClick={()=>mostrarAlerta()}>Confirmar Postulación</button>

        </div>
      </div>
    </>
  );
}

export default InforPost;
