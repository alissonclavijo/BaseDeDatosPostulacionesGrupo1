import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Login.scss";
import {useNavigate } from "react-router-dom";
import swal from "sweetalert";
import inni from "../img/login.png";
import {
  fetchCandidatos,
  fetchReCHUM,
} from "../services/api";
import bcrypt from "bcryptjs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [candidatosData, setCandidatosData] = useState([]);
  const [rechumData, setRechumData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    
    async function fetchData() {
    const candidatosData = await fetchCandidatos();
    setCandidatosData(candidatosData);
    const rechumData = await fetchReCHUM();
    setRechumData(rechumData);
 

  }
  fetchData();
}, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const candidatos = candidatosData.find(
      (candidatos) =>
        candidatos.cand_correo === email &&
        bcrypt.compareSync(password, candidatos.cand_password)
    );

    const rechum = rechumData.find(
      (rechum) =>
        rechum.rh_correo === email &&
        bcrypt.compareSync(password, rechum.rh_password)
    );
    if (candidatos) {
      localStorage.setItem("tokenCandidatos", true);
      localStorage.setItem("cand_nombre1", candidatos.cand_nombre1);
      localStorage.setItem("cand_id", candidatos.cand_id);  
      navigate("/homepost");
    } else if (rechum) {
      localStorage.setItem("tokenRechum", "true");
      navigate("/answerRRHH") ;
    } else {
      swal("Sus credenciales son incorrectas");
    }
  };

  return (
    <>
      <div className="main-login">
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="login-contain">
          <div className="rigth-side1">
            <div className="welcomenote1">
              <h3>Bienvenido de vuelta!!!</h3>
              <br />
            </div>

            <div className="welcomeimg1">
              <img src={inni} id="wel-img-id1" alt="" />
            </div>
          </div>

          <div className="left-side1">
            <br />
            <br />
            <br />
            <h2 className="titu">Inicio de sesión</h2>
            <br />
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
              <label className="label2" htmlFor="email">
                Email:
              </label>
              <input
                className="input2"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />

              <label className="label2" htmlFor="password">
                Contraseña:
              </label>
              <input
                className="input2"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className="submit">
                <button type="submit" className="submit-btn1">
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
