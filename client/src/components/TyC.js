// components/TyC.js (TermsAndConditions)
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Popup from "./PopUpterms";

const TermsAndConditions = ({ onTycCheckedChange }) => {
  const tycRef = useRef(null);

  const handleTycChange = () => {
    const checked = tycRef.current.checked;
    onTycCheckedChange(checked);
  };

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <br />
      <h3>Términos y Condiciones</h3>
      Estoy de acuerdo con los{" "}
      <Link to="#" className="enlace-terminos" onClick={openPopup}>
        términos y condiciones
      </Link>{" "}
      <br />
      <input
        type="checkbox"
        onChange={handleTycChange}
        ref={tycRef}
        id="condiciones"
        name="condiciones"
      />{" "}
      
      <Popup isOpen={popupOpen} onClose={closePopup} content={<Popup />} />
    </div>
  );
};

export default TermsAndConditions;
