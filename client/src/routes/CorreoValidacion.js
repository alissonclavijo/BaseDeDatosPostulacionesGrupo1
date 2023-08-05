import React, { useState } from 'react';
import RegistroCorreo from '../components/RegistroCorreo';
import RegistroCodigo from '../components/RegistroCodigo';
import { useNavigate } from 'react-router-dom';



const Registro = () => {
  const [correo, setCorreo] = useState('');
  const [codigo, setCodigo] = useState('');
  const [showCorreo, setShowCorreo] = useState(false);
  const navigate = useNavigate();

  const handleSubmitCorreo = (email) => {
    setCorreo(email);
    setShowCorreo(true);
  };

  const handleSubmitCodigo = (inputCodigo) => {
    setCodigo(inputCodigo);
    navigate('/registerinformation', { state: { email: correo }});
  };

  return (
    <div>
      {correo === '' ? (
        <RegistroCorreo onSubmitCorreo={handleSubmitCorreo} />
      ) : (
        <RegistroCodigo correo={correo} codigo={codigo} onSubmitCodigo={handleSubmitCodigo} showCorreo={showCorreo} />
      )}
    </div>
  );
};

export default Registro;
