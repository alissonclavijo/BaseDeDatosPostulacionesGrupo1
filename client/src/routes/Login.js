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

  const [candidatosData, setCandidatosData] = useState([]);
  const [rechumData, setRechumData] = useState([]);

  const navigate = useNavigate();

  /*useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/candidatos");
      setUserData(result.data);
    };

    fetchData();
  }, []);*/
  useEffect(() => {
    // Cargar datos de candidatos
    const fetchCandidatos = async () => {
      try {
        const result = await axios.get("http://localhost:5000/candidatos");
        // Aquí puedes hacer lo que necesites con los datos de candidatos
        setCandidatosData(result.data);
      } catch (error) {
        console.error("Error al obtener datos de candidatos:", error);
      }
    };

    // Cargar datos de ReCHUM (ajusta la URL y el proceso de acuerdo a tu caso)
    const fetchReCHUM = async () => {
      try {
        const result = await axios.get("http://localhost:5000/rechum");
        // Aquí puedes hacer lo que necesites con los datos de ReCHUM
        setRechumData(result.data);
      } catch (error) {
        console.error("Error al obtener datos de ReCHUM:", error);
      }
    };

    fetchCandidatos();
    fetchReCHUM();
  }, []);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  /*const handleSubmit = async (e) => {
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
  };*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("token", true);
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
         
     navigate("/homepost");
    } else if (rechum) {
         

       navigate("/recursosh");
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
