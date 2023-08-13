import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import inni from "../img/login.png";
import axios from "axios";
import bcrypt from "bcryptjs";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showCustomAlert, setShowCustomAlert] = useState(false);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/candidatos");
      setUserData(result.data);
    };

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
    localStorage.setItem("token", true);
  
    const candidatos = userData.find((candidatos) => candidatos.cand_correo === email);
  
    if (candidatos) {
      try {
        const passwordMatches = await bcrypt.compare(password, candidatos.cand_password);
  
        if (passwordMatches) {
          if (candidatos.cand_nombre1 === "sebas") {
            console.log("Admin login successful");
            navigate("/recursosh");
          } else {
            navigate("/homepost");
            console.log("User login successful");
          }
        } else {
          swal("Sus credenciales son incorrectas");
        }
      } catch (error) {
        console.error("Error al comparar contraseñas:", error);
        // Maneja el error de comparación de contraseñas
      }
    } else {
      swal("Sus credenciales son incorrectas");
    }
  };

  const handleCloseCustomAlert = () => {
    setShowCustomAlert(false);
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

        {showCustomAlert && (
          <div className="custom-alert">
            <p>
              Tu información será manipulada conforme a la necesidad de la
              institución sin lugar a reclamos, conforme a la ley de protección
              de datos del Ecuador.
            </p>
            <Link to="/homepost">
              <button className="submit-btn1" onClick={handleCloseCustomAlert}>
                Aceptar
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
