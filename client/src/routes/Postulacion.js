import React, { useState, useEffect } from 'react';
import Navpost from '../components/Navpost';
import "./Postulacion.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert'

function Postulacion() {
  const [selectedOption, setSelectedOption] = useState(""); // Estado para controlar la opción seleccionada en el combo box
  const [postulacion, setPostulacion] = useState('');
  const [contratacion, setContratacion] = useState('');
  const [academico, setAcademico] = useState('');
  const [sede, setSede] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [amplio, setAmplio] = useState('');
  const [especifico, setEspecifico] = useState('');
  const [oferta, setOferta] = useState('');
  const [opcionesPostulacion, setOpcionesPostulacion] = useState([]);
  const [opcionesContratacion, setOpcionesContratacion] = useState([]);
  const [opcionesAcademico, setOpcionesAcademico] = useState([]);
  const [opcionesOferta, setOpcionesOferta] = useState([]);
  const [opcionesSedes, setOpcionesSedes] = useState([]);
  const [opcionesDepartamentos, setOpcionesDepartamentos] = useState([]);
  const [opcionesAmplio, setOpcionesAmplio] = useState([]);
  const [opcionesEspecifico, setOpcionesEspecifico] = useState([]);



  function mostrar() {
    // Obtener el elemento con el id "tabla"
    var div = document.getElementById('tabla');
    // Verificar si se encontró el elemento
    if (div) {
      // Cambiar el estilo para mostrar el div
      div.style.display = 'block';
    } else {
      console.error("Elemento con id 'tabla' no encontrado.");
    }
  }
  const navigate = useNavigate();
  const mostrarAlerta = () => {
    swal({
      title: '',
      content: {
        element: "div",
        attributes: {
          innerHTML: "Verifique los datos<br/>Solo puede postular una vez por concurso.<br/>Verifique los datos antes de enviar. <br/>",
        },
      },
      icon: '',
      buttons: ["Regresar", "Postular"],
    }).then((value) => {
      console.log(value)
      if (value) {
        navigate("/"); // Navega a "/home" si se hace clic en "Postular"
      }
    });
    
  };

  useEffect(() => {
    console.log(departamento);
    axios.get("http://localhost:5000/postulaciones") // Cambia la URL de la API con la que te conectas a la base de datos
      .then((response) => {
        setOpcionesPostulacion(response.data); // Actualiza el estado con los datos recibidos de la API
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de postulación:", error);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/contrataciones") // Cambia la URL de la API con la que te conectas a la base de datos
      .then((response) => {
        setOpcionesContratacion(response.data); // Actualiza el estado con los datos recibidos de la API
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de contratación:", error);
      });
  }, [postulacion]);
  useEffect(() => {
    axios.get("http://localhost:5000/personal_academico") // Cambia la URL de la API con la que te conectas a la base de datos
      .then((response) => {
        setOpcionesAcademico(response.data); // Actualiza el estado con los datos recibidos de la API
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de personal académico:", error);
      });
  }, [contratacion]);
  useEffect(() => {
    axios.get("http://localhost:5000/sedes") // Cambia la URL de la API con la que te conectas a la base de datos
      .then((response) => {
        setOpcionesSedes(response.data); // Actualiza el estado con los datos recibidos de la API
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de sedes:", error);
      });
  }, [academico]);
  useEffect(() => {
    axios.get("http://localhost:5000/departamentos") // Cambia la URL de la API con la que te conectas a la base de datos
      .then((response) => {
        setOpcionesDepartamentos(response.data); // Actualiza el estado con los datos recibidos de la API
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de departamentos:", error);
      });
  }, [sede]);
  useEffect(() => {
    axios.get("http://localhost:5000/campo_amplio") // Cambia la URL de la API con la que te conectas a la base de datos
      .then((response) => {
        setOpcionesAmplio(response.data); // Actualiza el estado con los datos recibidos de la API
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de campo amplio:", error);
      });
  }, [departamento]);
  useEffect(() => {
    axios.get("http://localhost:5000/campo_especifico") // Cambia la URL de la API con la que te conectas a la base de datos
      .then((response) => {
        setOpcionesEspecifico(response.data); // Actualiza el estado con los datos recibidos de la API
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de campo específico:", error);
      });
  }, [amplio]);
  useEffect(() => {
    axios.get("http://localhost:5000/ofertas?sede_id=${sede_id}&dept_id=${dept_id}") // Cambia la URL de la API con la que te conectas a la base de datos
      .then((response) => {
        setOpcionesOferta(response.data); // Actualiza el estado con los datos recibidos de la API
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de ofertas:", error);
      });


  }, [especifico]);


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    // Aquí puedes agregar la lógica que desees para el botón
    // Por ejemplo, cambiar el color o realizar alguna acción específica
    // En este ejemplo, solo cambiaremos el color del botón.
  };

  return (
    <>
      <div className="body">
        <Navpost />

        <div className="contenedor">
          <div className="postulacion">
            <h1>Bienvenido a la Plataforma ESPE Docentes</h1>
            <br />

            <div className="form-group">
              <label for="postulacion">POSTULACIÓN</label>
              <select
                name="Periodo"
                onChange={(e) => {
                  setPostulacion(e.target.value);
                  setContratacion(''); // Reiniciar el valor de Contratación al cambiar Postulación
                  setAcademico(''); // Reiniciar el valor de Personal Académico al cambiar Postulación
                }}
                value={postulacion}
              >
                {opcionesPostulacion.map((opcion) => (
                  <option key={opcion.post_periodo} value={opcion.post_periodo}>
                    {opcion.post_periodo}
                  </option>
                ))}
              </select>
            </div>
            {postulacion && (
              <>
                <div className="form-group">
                  <label for="contratacion">TIPO DE CONTRATACIÓN</label>
                  <select
                    name="Contratacion"
                    onChange={(e) => {
                      setContratacion(e.target.value);
                      setAcademico('');
                    }}
                    value={contratacion}
                  >
                    {opcionesContratacion.map((opcion) => (
                      <option key={opcion.con_nombre} value={opcion.con_nombre}>
                        {opcion.con_nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
            {contratacion && (
              <>
                <div className="form-group">
                  <label for="academico">TIPO DE PERSONAL ACADÉMICO</label>
                  <select
                    name="Academicoo"
                    onChange={(e) => {
                      setAcademico(e.target.value);
                    }}
                    value={academico}
                  >
                    {opcionesAcademico.map((opcion) => (
                      <option key={opcion.pa_nombre} value={opcion.pa_id}>
                        {opcion.pa_nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
            {academico && (
              <>
                <div className="form-group">
                  <label for="sede">SEDE</label>
                  <select
                    name="Sede"
                    onChange={(e) => {
                      setSede(e.target.value);
                    }}
                    value={sede}
                  >
                    {opcionesSedes.map((opcion) => (
                      <option key={opcion.sede_nombre} value={opcion.sede_nombre}>
                        {opcion.sede_nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
            {sede && (
              <>
                <div className="form-group">
                  <label for="departamento">DEPARTAMENTO</label>
                  <select
                    name="Departamento"
                    onChange={(e) => {
                      setDepartamento(e.target.value);

                    }}
                    value={departamento}
                  >
                    {opcionesDepartamentos.map((opcion) => (
                      <option key={opcion.dept_nombre} value={opcion.dept_id}>
                        {opcion.dept_descripcion}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
            {departamento && (
              <>
                <div className="form-group">
                  <label for="amplio">CAMPO AMPLIO</label>
                  <select
                    name="Amplio"
                    onChange={(e) => {
                      setAmplio(e.target.value);
                    }}
                    value={amplio}
                  >
                    {opcionesAmplio.map((opcion) => (
                      <option key={opcion.ca_id} value={opcion.ca_id}>
                        {opcion.ca_nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
            {amplio && (
              <>
                <div className="form-group">
                  <label for="especifico">CAMPO ESPECÍFICO</label>
                  <select
                    name="Especifico"
                    onChange={(e) => {
                      setEspecifico(e.target.value);
                    }}
                    value={especifico}
                  >
                    {opcionesEspecifico.map((opcion) => (
                      <option key={opcion.ce_nombre} value={opcion.ce_nombre}>
                        {opcion.ce_nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <button onClick={mostrar}>BUSCAR OFERTAS</button>

            <div className='visualizar centrado' id="tabla">
              <table className='mostrar'>
                <tr>
                  <th colSpan={6}>Usuarios</th>
                </tr>
                <tr>
                  <th>Vacantes </th>
                  <th>Tiempo</th>
                  <th>Campo Amplio </th>
                  <th>Campo Específico </th>
                  <th>Sede</th>
                  <th>Departamento </th>
                </tr>
                {opcionesOferta.map(val => {
                  return <tr>
                    <td>{val.ofe_vacantes}</td>
                    <td>{val.ofe_horas}</td>

                    {opcionesAmplio.map(valor => {
                      if (valor.ca_id == val.ca_id) {
                        return <td>{valor.ca_nombre}</td>
                      }

                    })}
                    {opcionesEspecifico.map(valor => {
                      if (valor.ce_id == val.ce_id) {
                        return <td>{valor.ce_nombre}</td>
                      }

                    })}
                    {opcionesSedes.map(valor => {
                      if (valor.sede_id == val.sede_id) {
                        return <td>{valor.sede_nombre}</td>
                      }

                    })}
                    {opcionesDepartamentos.map(valor => {
                      if (valor.dept_id == val.dept_id) {
                        return <td>{valor.dept_nombre}</td>
                      }
                    })}
                    <td><button className='botonPeque'>Seleccionar</button></td>

                  </tr>
                })}
              </table>
            </div>





            {/* <button onClick={handleButtonClick}>Actividad Docencia</button>
            <button onClick={handleButtonClick}>Actividad Investigacion</button>
            <button onClick={handleButtonClick}>Actividad Vinculacion</button> */}

            {/*
          <h2>Botón desplegable para formatos de documentos</h2>
          <div className="custom-select">
            <select>
              <option value="pdf">
                <img src="../img/pdf.png" alt="PDF" className="file-icon" />
                PDF
              </option>
              <option value="word">
                <img
                  src="../img/wordimg.png"
                  alt="Word"
                  className="file-icon"
                />
                Word
              </option>
            </select>
          </div>
         */}
            <br />
            <br />
            <button hidden={!amplio} class="btn btn-primary" onClick={()=>mostrarAlerta()}>Postulación</button>
          </div>

        </div>
      </div >
    </>
  );
}

export default Postulacion;
