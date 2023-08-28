import styled from "styled-components";
import React, { useState, useRef } from "react";
import axios from "axios";
import "../styles/InforPost.css";
import ReactModal from "react-modal"; 
import { useNavigate } from "react-router-dom";
import Navpost from '../components/Navpost';
import { useLocation } from "react-router-dom";



export function InforPost() {
  const documentLabels = [
    "Hoja de vida formato ESPE",
    "Copia de cédula",
    "Certificado de votación",
    "Certificado de registro de título",
    "Experiencia de docente",
    "Certificado de no tener impedimento de ejercer cargo público",
    "Certificado de no tener responsabilidades administrativas",
    "Experiencia profesional",
  ];

  const fileInputs = useRef([]); 
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const candidatoId = localStorage.getItem("cand_id");
  localStorage.setItem("cand_id", candidatoId);


  const handleModalAcceptClick = () => {

    console.log("Data submitted successfully!");
    // Close the modal after submitting
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleEnviarClick = () => {
    // Check if the user has uploaded all the required documents here
    // For simplicity, let's assume that all documents are required
    const areAllDocumentsUploaded = sheetsCount.every((sheets) => sheets > 0);

    if (areAllDocumentsUploaded) {
      // Show the confirmation modal if all documents are uploaded
      setShowConfirmModal(true);
    } else {
      // Display an error message if any document is missing
      alert("Subir todos los documentos necesarios");
    }
  };

  const [sheetsCount, setSheetsCount] = useState(Array(8).fill(0));
  const [linkPDF, setLinkPDF] = useState(Array(8).fill(0));
  const [isContinueButtonDisabled, setIsContinueButtonDisabled] = useState(true);

  const handleFileChange = async (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (fileExtension !== 'pdf'){
        setShowErrorModal(true);
        setIsContinueButtonDisabled(true);
        fileInputs.current[index].value = '';
        return;
      }
      setIsContinueButtonDisabled(false);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("cand_id", candidatoId);
      formData.append("id_documento", documentLabels[index]);
      formData.append("tipoDocumento", documentLabels[index]);

      try {
        const response = await axios.post("http://localhost:5000/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const { numPages } = response.data;
        const updatedSheetsCount = [...sheetsCount];
        const updatedLinkPDF = [...linkPDF];
        updatedSheetsCount[index] = numPages;
        updatedLinkPDF[index] = response.data.url;
        setSheetsCount(updatedSheetsCount);
        setLinkPDF(updatedLinkPDF);
        console.log("PDF subido a la Base de Datos");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
  <div>
  <Navpost/>
    <Container>
      <h1>Subir Documentos</h1>
      <Form>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ paddingLeft: "150px" }}><h2>Documentos que se debe enviar</h2></div>
          <div style={{ paddingRight: "1px" }}><h2>Previsualizar</h2></div>
          <div style={{ paddingRight: "30px" }}><h2>#</h2></div>
          
        </div>
        {documentLabels.map((label, index) => (
          
          <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>

          <div style={{ marginRight: "10px", width: "70%" }}>
            <label htmlFor={`file${index + 1}`}>{label}:</label>
            <input
              type="file"
              id={`file${index + 1}`}
              onChange={(e) => handleFileChange(index, e)}
              style={{ width: "100%" }}
              ref={(input) => (fileInputs.current[index] = input)} // Asignar la referencia al input
            />
          </div>
          <div>
            {/*<a href={linkPDF[index]} target="_blank" rel="noreferrer"><button onClick={(e) => e.preventDefault()}>📄 Previsualizar</button></a>*/}
            {sheetsCount[index] > 0 && <p style={{ paddingRight: "1px" }}> {sheetsCount[index]} hojas</p>}
          </div>
        </div>
        
        ))}
        {sheetsCount.reduce((a, b) => a + b, 0) > 0 && <h3>Total de Páginas: {sheetsCount.reduce((a, b) => a + b, 0)}</h3>}
        <button type="button" onClick={handleEnviarClick}>
          Enviar
        </button>
      </Form>

      <ReactModal
        isOpen={showConfirmModal}
        onRequestClose={() => setShowConfirmModal(false)}
        style={{
          content: {
            width: "40%", // Cambiado a 40%
            top: "10%",
            left: "30%", // Centrado horizontalmente con un margen del 30%
            right: "30%", // Centrado horizontalmente con un margen del 30%
            bottom: "10%",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
                },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            zIndex: 1000,
          },
        }}
      >
        <div className="mm-popup__box__header" style={{
          backgroundColor: "#black"
        }}>
          <h2 className="mm-popup__box__header__title" >Revise cuidadosamente la información antes de enviar</h2>
          <button
            className="mm-popup__close"
            onClick={() => setShowConfirmModal(false)}
            aria-label="Cerrar"
          >
            X
          </button>
        </div>
        <div className="mm-popup__box__body">
          <p>
            Por favor, confirme que está seguro de enviar los datos que ha subido. Una vez que envíe los datos, no tendrá otra oportunidad para realizar cambios.
          </p>
          <p>
            Es crucial tener presente que cualquier equivocación en los documentos podría conducir a la eliminación del concurso.
          </p>
          <img
            src="https://www.alchemer.com/wp-content/uploads/2023/03/Untitled-design-9.gif"
            alt="Imagen de ejemplo"
            style={{
              width: "100%", // Cambiar el tamaño de la imagen según sea necesario
              height: "auto",
            }}
          />
        </div>
        <div className="mm-popup__box__footer" style={{ textAlign: "center" }}>
          <div className="mm-popup__box__footer__right-space" style={{ display: "flex", justifyContent: "center", paddingRight: "120px", gap: "50px" }}>
            <button className="mm-popup__btn mm-popup__btn--cancel" onClick={() => setShowConfirmModal(false)}>
              Cancelar
            </button>
            <button className="mm-popup__btn mm-popup__btn--proceed" onClick={handleModalAcceptClick} disabled={isContinueButtonDisabled}>
              Continuar
            </button>
          </div>
        </div>

      </ReactModal>
      <ReactModal
        isOpen={showSuccessModal}
        onRequestClose={() => setShowSuccessModal(false)}
        className="mm-popup__box"
        overlayClassName="mm-popup__overlay"
        style={{
          content: {
            width: "40%", // Cambiado a 40%
            top: "10%",
            left: "41%", // Centrado horizontalmente con un margen del 30%
            right: "40%", // Centrado horizontalmente con un margen del 30%
            bottom: "10%",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
          },
        }}
      >
        <div className="mm-popup__box__header">
          <h2 className="mm-popup__box__header__title">Información Cargada Exitosamente</h2>
          <button
            className="mm-popup__close"
            onClick={() => setShowSuccessModal(false)}
            aria-label="Cerrar"
          >
            X
          </button>
        </div>
        <div className="mm-popup__box__body">
          <p>La información que has proporcionado ha sido cargada exitosamente.</p>
          <img
            src="https://services.riobravosystems.com/wp-content/uploads/2020/10/sendingmail.gif"
            alt="Imagen de ejemplo"
            style={{
              width: "100%", // Cambiar el tamaño de la imagen según sea necesario
              height: "auto",
              marginBottom:"-10px",
            }}/>
        </div>
        <div className="mm-popup__box__footer">
          <div className="mm-popup__box__footer__right-space">

            <button
              className="mm-popup__btn"
              onClick={() => {
                setShowSuccessModal(false);
                navigate("/postulacion"); 
              }}

            >
              Salir
            </button>
          </div>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={showErrorModal}
        onRequestClose={() => setShowErrorModal(false)}
        style={{
          content: {
            width: "25%",
            top: "30%",
            left: "37%",
            bottom: "35%",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Centrar contenido horizontalmente
            justifyContent: "center", // Centrar contenido verticalmente
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            zIndex: 1000,
          },
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p>Por favor seleccione un archivo PDF.</p>
          <img
            src="https://cdn.dribbble.com/users/251873/screenshots/9388228/error-img.gif"
            alt="Imagen de advertencia"
            style={{ width: "100px", height: "100px", marginBottom: "10px" }}
          />
          <br/>
          <button onClick={() => setShowErrorModal(false)}>Cerrar</button>
        </div>
      </ReactModal>
    </Container>
    </div>
  );
}

const Container = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;

  h1 {
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
  }

  input {
    width: 100%;
  }
  button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default InforPost;
