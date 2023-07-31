import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ArchivoInput = ({ label, onArchivoSeleccionado }) => {
  const [nombreArchivo, setNombreArchivo] = useState('');

  const onDrop = (archivos) => {
    // Aquí puedes realizar operaciones con el archivo cargado, si es necesario.
    // En este ejemplo, solo llamamos a la función `onArchivoSeleccionado` con el primer archivo.
    onArchivoSeleccionado(archivos[0]);
    setNombreArchivo(abreviarNombre(archivos[0].name));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: ['.pdf', '.xlsx'],
    multiple: false,
    onDrop,
  });

  // Función para abreviar el nombre del archivo y agregar el formato si es necesario
  const abreviarNombre = (nombre) => {
    if (nombre.length <= 17) {
      return nombre;
    } else {
      const extension = nombre.split('.').pop();
      const nombreSinExtension = nombre.substring(0, nombre.length - extension.length - 1);
      return nombreSinExtension.substring(0, 10) + '...' + extension;
    }
  };

  return (
    <>
      <label className='label'>{label}</label>
      <div className='archivo' {...getRootProps()} style={{ border: '1px dashed black', marginTop: '-1rem', paddingTop: '10px' }}>
        <input {...getInputProps()} />
        {nombreArchivo && <p>{nombreArchivo}</p>}
        {!nombreArchivo && <p>Archivo excel o pdfs</p>}
      </div>
    </>
  );
};

export default ArchivoInput;
