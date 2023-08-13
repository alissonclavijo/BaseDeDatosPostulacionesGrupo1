import React, { useState,useEffect } from "react";
import "./RegistroCorreo.css";
import Navbar from "../components/Navbar";
import axios from "axios";

const RegistroCorreo = ({ onSubmitCorreo }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [emailExists, setEmailExists] = useState(false);

  useEffect(() => {
    
    if (email) {
      axios
        .get(`http://localhost:5000/candidatos/porcorreo/${email}`)
        .then((response) => {
          if (response.data) {
            setEmailExists(true);
          } else {
            setEmailExists(false);
          }
        })
        .catch((error) => {
          console.error('Error al verificar el correo electrónico:', error);
          setEmailExists(false);
        });
    } else {
      setEmailExists(false);
    }
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (emailExists) {
        setError("El correo ya esta registrado.");
      } else {
        const response = await fetch("http://localhost:5000/enviar-correo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ destinatario: email }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage(data.message);
        } else {
          setError(data.message);
        }
        onSubmitCorreo(email);
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setError("Error al enviar el correo.");
    }
  };

  return (
    <>
      <div className="background-registro-correo">
        <Navbar />
        <div className="registro-correo-container">
          <h2> Ingrese el correo</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Registro</button>
          </form>

          {emailExists && (
            <div className="mensaje-error">
             <h2> El correo electrónico ya se encuentra registrado. </h2>
            </div>
          )}

          <div className="advertencia">
            Utilizar solo cuentas de gmail, hotmail, outlook.
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistroCorreo;






