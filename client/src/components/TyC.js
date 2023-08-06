// components/TyC.js (TermsAndConditions)
import React, { useRef } from "react";

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
      <a href="terminos.html" target="_blank" className="enlace-terminos">
        términos y condiciones
      </a>{" "}
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
