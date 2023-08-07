import React, { useState } from 'react';
import './InfoPost.css';
import ArchivoInput from '../components/ArchivoInput';
import NumeroHojasInput from '../components/NumeroHojasInput';
import Navpost from '../components/Navpost';
import swal from 'sweetalert'
import { Link } from 'react-router-dom';
import { guardarArchivos } from '../services/informacion';
import Modal from 'react-modal';
import { SheetRenderer } from 'react-excel-renderer';



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

  //Previsualizacion
  const [archivoSeleccionadoParaPrevisualizar, setArchivoSeleccionadoParaPrevisualizar] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  
  const verPrevisualizacion = (archivo) => {
    if (archivo) {
      setArchivoSeleccionadoParaPrevisualizar(archivo);
      setModalAbierto(true);
    }
  };

  const cerrarModal = () => {
    setArchivoSeleccionadoParaPrevisualizar(null);
    setModalAbierto(false);
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
            // Crear un array con todos los archivos seleccionados
            const archivos = [
              archivoSeleccionadoHojaVida,
              archivoSeleccionadoCedula,
              archivoSeleccionadoDocente,
              archivoSeleccionadoProfesional,
              archivoSeleccionadoAdministrativa,
              archivoSeleccionadoPublico,
              archivoSeleccionadoTitulo,
              archivoSeleccionadoVotacion

            ];
            guardarArchivos(archivos)
            .then((response) => {
              // Petición enviada con éxito, mostrar mensaje de éxito
              swal({
                text: 'Datos subidos correctamente',
                icon: 'success',
                button: 'Salir'
              });
            })
            .catch((error) => {
              // Manejar el error aquí
              swal({
                title: 'Error',
                text: 'Hubo un error al subir los archivos.',
                icon: 'error',
                button: 'Aceptar',
              });
            });
        }
      });
    }
  };
  return (
    <>
     
        <Navpost />
        <h1>Información</h1>
        <div className='container-inf'>
        <h5 className='lab'>Núm Páginas</h5>
          {/* Hoja de vida formato ESPE */}
          <div className='input-container'>
            <ArchivoInput label='Hoja de vida formato ESPE' onArchivoSeleccionado={handleArchivoSeleccionadoHojaVida} />
            <NumeroHojasInput archivo={archivoSeleccionadoHojaVida} etiqueta='Hoja de vida' />
            {archivoSeleccionadoHojaVida && (
            <button className='ver-previsualizacion' onClick={() => verPrevisualizacion(archivoSeleccionadoHojaVida)}>
              <i class="fa-solid fa-eye"></i>
            </button>
          )}
          </div>

          {/* Copia de cédula */}
          <div className='input-container'>
            <ArchivoInput label='Copia de cédula' onArchivoSeleccionado={handleArchivoSeleccionadoCedula} />
            <NumeroHojasInput archivo={archivoSeleccionadoCedula} etiqueta='Copia de cédula' />
            {archivoSeleccionadoCedula && (
            <button className='ver-previsualizacion' onClick={() => verPrevisualizacion(archivoSeleccionadoCedula)}>
              <i class="fa-solid fa-eye"></i>
            </button>
          )}
          </div>

          {/*Certificado de votación*/}
          <div className='input-container'>
            <ArchivoInput label='Certificado de votación' onArchivoSeleccionado={handleArchivoSeleccionadoVotacion} />
            <NumeroHojasInput archivo={archivoSeleccionadoVotacion} etiqueta='Certificado de votación' />
            {archivoSeleccionadoVotacion && (
            <button className='ver-previsualizacion' onClick={() => verPrevisualizacion(archivoSeleccionadoVotacion)}>
              <i class="fa-solid fa-eye"></i>
            </button>
          )}
          </div>

          {/*Certificado de registro de título*/}
          <div className='input-container'>
            <ArchivoInput label='Certificado de registro de título' onArchivoSeleccionado={handleArchivoSeleccionadoTitulo} />
            <NumeroHojasInput archivo={archivoSeleccionadoTitulo} etiqueta='Certificado de registro de título' />
            {archivoSeleccionadoTitulo && (
            <button className='ver-previsualizacion' onClick={() => verPrevisualizacion(archivoSeleccionadoTitulo)}>
              <i class="fa-solid fa-eye"></i>
            </button>
          )}
          </div>

          {/* Experiencia de docente */}
          <div className='input-container'>
            <ArchivoInput label='Experiencia de docente' onArchivoSeleccionado={handleArchivoSeleccionadoDocente}/>
            <NumeroHojasInput archivo={archivoSeleccionadoDocente} etiqueta='Experiencia de docente' />
            {archivoSeleccionadoDocente && (
            <button className='ver-previsualizacion' onClick={() => verPrevisualizacion(archivoSeleccionadoDocente)}>
              <i class="fa-solid fa-eye"></i>
            </button>
          )}
          </div>

          {/* Certificado de no tener impedimento de ejercer cargo público */}
          <div className='input-container'>
            <ArchivoInput label='Certificado de no tener impedimento de ejercer cargo público' onArchivoSeleccionado={handleArchivoSeleccionadoPublico} />
            <NumeroHojasInput archivo={archivoSeleccionadoPublico} etiqueta='Certificado de no tener impedimento de ejercer cargo público' />
            {archivoSeleccionadoPublico && (
            <button className='ver-previsualizacion' onClick={() => verPrevisualizacion(archivoSeleccionadoPublico)}>
              <i class="fa-solid fa-eye"></i>
            </button>
          )}
          </div>

          {/* Certificado de no tener responsabilidades administrativas */}
          <div className='input-container'>
            <ArchivoInput label='Certificado de no tener responsabilidades administrativas' onArchivoSeleccionado={handleArchivoSeleccionadoAdministrativa} />
            <NumeroHojasInput archivo={archivoSeleccionadoAdministrativa} etiqueta='Certificado de no tener responsabilidades administrativas' />
            {archivoSeleccionadoAdministrativa && (
            <button className='ver-previsualizacion' onClick={() => verPrevisualizacion(archivoSeleccionadoAdministrativa)}>
              <i class="fa-solid fa-eye"></i>
            </button>
          )}
          </div>

          {/* Experiencia profesional */}
          <div className='input-container'>
            <ArchivoInput label='Experiencia profesional' onArchivoSeleccionado={handleArchivoSeleccionadoProfesional} />
            <NumeroHojasInput archivo={archivoSeleccionadoProfesional} etiqueta='Experiencia profesional' />
            {archivoSeleccionadoProfesional && (
            <button className='ver-previsualizacion' onClick={() => verPrevisualizacion(archivoSeleccionadoProfesional)}>
              <i class="fa-solid fa-eye"></i>
            </button>
          )}
          </div>
      <button  class="btn btn-primary" onClick={()=>mostrarAlerta()}>Confirmar Postulación</button>
        </div>
        {archivoSeleccionadoParaPrevisualizar && (
        <Modal isOpen={modalAbierto} onRequestClose={cerrarModal} contentLabel='Previsualización del archivo'>
          <div>
            <h2>Previsualización del archivo</h2>
            {archivoSeleccionadoParaPrevisualizar.type === 'application/pdf' ? (
              <iframe src={URL.createObjectURL(archivoSeleccionadoParaPrevisualizar)} width='100%' height='500px' title='Previsualización PDF' />
            ) : (
              <p>No se puede previsualizar el archivo. Solo se admiten archivos PDF.</p>
            )}
            <button onClick={cerrarModal}>Cerrar</button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default InforPost;