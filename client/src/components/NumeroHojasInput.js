import React, { useState, useEffect } from 'react';
import { PDFDocument } from 'pdf-lib';
import { read } from 'xlsx';

const NumeroHojasInput = ({ archivo, etiqueta }) => {
  const [numeroHojas, setNumeroHojas] = useState(0);

  useEffect(() => {
    const contarHojas = async () => {
      if (archivo) {
        try {
          const fileData = await archivo.arrayBuffer();
          const fileExtension = archivo.name.split('.').pop().toLowerCase();

          if (fileExtension === 'pdf') {
            const pdfDoc = await PDFDocument.load(fileData);
            setNumeroHojas(pdfDoc.getPageCount());
          } else if (fileExtension === 'xlsx') {
            const workbook = read(fileData, { type: 'array' });
            const sheetNameList = workbook.SheetNames;
            setNumeroHojas(sheetNameList.length);
          } else {
            // Si el archivo no es de tipo PDF o Excel, se muestra un mensaje de error.
            setNumeroHojas(-1);
          }
        } catch (error) {
          console.error('Error al contar el número de hojas:', error);
          setNumeroHojas(-1);
        }
      }
    };
    contarHojas();
  }, [archivo]);

  return (
    <div className='hojas'>
      <input type="text" value={numeroHojas >= 0 ? numeroHojas : 'Error al cargar el archivo'} readOnly />

    </div>
  );
};

export default NumeroHojasInput;

