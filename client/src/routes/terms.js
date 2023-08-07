import React from "react";
import Navbar from "../components/Navbar";
import "./terms.css";
import LogoImage from "../img/Logo.jpeg"; // Importa la imagen aquí

const Terminos = () => {
  return (
    
    <>
    <Navbar />
      <div className="contenedor">
      <div className="texto"></div>
      <div className="imagen">
        <img src={LogoImage} alt="Descripción de la imagen" />

          <h2>Uso y Protección de Datos de los Clientes:</h2>
          <div class="section">
            <p>
              <strong>Recopilación de Datos:</strong> La aplicación web recoge
              datos personales de los postulantes a través de un formulario de
              inscripción.
            </p>
            <p>
              <strong>Uso de Datos:</strong> Los datos recopilados se utilizan
              para el proceso de selección de docentes y se mantienen
              confidenciales y seguros.
            </p>
            <p>
              <strong>Almacenamiento y Seguridad:</strong> Se implementan
              medidas de seguridad para proteger los datos, aunque se advierte
              sobre los riesgos inherentes a la transmisión de información en
              línea.
            </p>
            <p>
              <strong>Derechos del Cliente:</strong> Los postulantes pueden
              acceder, corregir, eliminar o oponerse al tratamiento de sus
              datos, conforme a la ley.
            </p>
            <p>
              <strong>Responsabilidad del Administrador:</strong> El
              administrador garantiza la seguridad y confidencialidad de los
              datos, tomando medidas para proteger la información.
            </p>
            <p>
              <strong>Tiempo de Retención:</strong> Los datos se conservan el
              tiempo necesario y conforme a las obligaciones legales.
            </p>
            <p>
              <strong>Notificación de Cambios:</strong> Cambios en la política
              de privacidad se comunicarán a través de la plataforma.
            </p>
          </div>

      

      </div>
      </div>
    </>
  );
};

export default Terminos;
