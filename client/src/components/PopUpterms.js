import React from "react";
import "./PopUpterms.css";
import TermsAndConditions from "../terms/TerminosText";
import PopupImage from "../img/Logo.jpeg"; // Ruta a tu imagen

const Popup = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-container">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="popup-header">
          <img src={PopupImage} alt="Popup Header" className="popup-image" />
        </div>
        <div className="scrollable-content">
          <TermsAndConditions />
        </div>
      </div>
    </div>
  );
};

export default Popup;
