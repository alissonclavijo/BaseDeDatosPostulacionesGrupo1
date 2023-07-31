import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ArchivoInput = ({ label, onArchivoSeleccionado }) => {
  const [nombreArchivo, setNombreArchivo] = useState('');

  const onDrop = (archivos) => {
    // Aquí puedes realizar operaciones con el archivo cargado, si es necesario.
    // En este ejemplo, solo llamamos a la función `onArchivoSeleccionado` con el primer archivo.
    onArchivoSeleccionado(archivos[0]);
    setNombreArchivo(archivos[0].name);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: ['.pdf', '.xlsx'],
    multiple: false,
    onDrop,
  });

  return (
    <>
    <label className='label'>{label}</label>
        <div className='archivo' {...getRootProps()} style={{ border: '1px dashed black', marginTop: '-1rem', paddingTop:'10px' }}>
            <input {...getInputProps()} />
            {nombreArchivo && <p>{nombreArchivo}</p>}
            {!nombreArchivo && <p>Archivo excel o pdfs</p>}
        </div>
    </>
  );
};

export default ArchivoInput;

