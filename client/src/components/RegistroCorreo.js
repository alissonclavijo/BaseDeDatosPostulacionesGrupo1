import React, { useState } from 'react';

const RegistroCorreo = ({ onSubmitCorreo }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
 /*
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar el formato del correo electrónico usando una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Ingrese un correo electrónico válido.');
      return;
    }

    // Realizar una solicitud al backend para verificar si el correo ya está registrado
    try {
      const response = await fetch(`http://localhost:5000/candidatos/${encodeURIComponent(email)}`);
      const data = await response.json();

      // Si el correo ya está registrado, mostrar un mensaje de error
      if (response.ok && data.length > 0) {
        setErrorMessage('El correo electrónico ya está registrado.');
        return;
      }
    } catch (error) {
      console.error('Error al verificar el correo:', error);
    }

    // Si el correo es válido y no está registrado, enviar el correo al onSubmitCorreo
    onSubmitCorreo(email);
  };*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/enviar-correo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ destinatario: email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setError('Error al enviar el correo.');
    }
  };

  return (
    <div>
      <h2>Ingrese el correo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Registro</button>
      </form>
    </div>
  );
};

export default RegistroCorreo;
