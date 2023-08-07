// components/TyC.js (TermsAndConditions)
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = ({ onTycCheckedChange }) => {
  const tycRef = useRef(null);

  const handleTycChange = () => {
    const checked = tycRef.current.checked;
    onTycCheckedChange(checked);
  };

  return (
    <div>
        <br />
      <h3>Términos y Condiciones</h3>
      Estoy de acuerdo con los{" "}
      <Link to="/terminosycondiciones" target="_blank" className="enlace-terminos">
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
    </div>
  );
};

export default TermsAndConditions;
