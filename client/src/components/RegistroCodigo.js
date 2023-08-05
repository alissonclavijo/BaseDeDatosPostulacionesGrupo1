import React, { useState } from 'react';


const RegistroCodigo = ({ correo, onSubmitCodigo }) => {
  const [inputCodigo, setInputCodigo] = useState('');
  const [codigoVerificacion, setCodigoVerificacion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitCodigo(inputCodigo);
    
  };

  return (
    <div>
      <h2>Ingrese el código que se envió al correo</h2>
      <form onSubmit={handleSubmit}>
        <p>Correo electrónico:</p>
        <input
          type="text"
          value={correo}
          readOnly
        />
        <p>Se envió un código a su correo. Por favor, ingréselo a continuación:</p>
        <input
          type="text"
          placeholder="Código"
          value={inputCodigo}
          onChange={(e) => setInputCodigo(e.target.value)}
        />
        <button type="submit">Continuar</button>
      </form>
    </div>
  );
};

export default RegistroCodigo;
