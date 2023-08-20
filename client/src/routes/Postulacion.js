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
  const [detalles, setDetalles] = useState('');


  const mostrarDetalles = (vacantes, tiempo) => {
    setDetalles(`Vacantes: ${vacantes}, Tiempo: ${tiempo}`);
    swal({
      title: '',
      content: {
        element: "div",
        attributes: {
          innerHTML: `Verifique los datos<br/>Solo puede postular una vez por concurso.<br/>Verifique los datos antes de enviar. <br/><br/>Detalles de la postulación seleccionada<br/>Sede: ${sede}<br/>Campo Amplio: ${amplio}<br/>Campo Específico: ${especifico}<br/>Tiempo: ${tiempo} horas<br/>Vacantes: ${vacantes}<br/>`,
        },
      },
      icon: '',
      buttons: ["Regresar", "Postular"],
    }).then((value) => {
      console.log(value)
      if (value) {
        postulacionExitosa();
        navigate("/postulacion"); // Navega a "/home" si se hace clic en "Postular"
      }
    });

  };


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
  const AlertaCamposIncompletos = () => {
    swal({
      title: '',
      content: {
        element: "div",
        attributes: {
          innerHTML: "Por favor, completa todos los campos antes de buscar ofertas.<br/>",
        },
      },
      icon: '',
      button: "Entendido",
    })
  };
  const postulacionExitosa = () => {
    swal({
      title: '',
      content: {
        element: "div",
        attributes: {
          innerHTML: "Postulación exitosa<br/>	",
        },
      },
      icon: '',
      button: "Entendido",
    }).then((value) => {
      console.log(value)
      if (value) {
        navigate("/homepost"); // Navega a "/home" si se hace clic en "Postular"
      }
    });

  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = () => {
    if (todosLosCamposLlenos()) {
      mostrar();
      console.log(sede);
    console.log(departamento);
    console.log(amplio);
    console.log(especifico);
    } else {
      AlertaCamposIncompletos();
    }
  };
  // Función para verificar si todos los campos están llenos
  const todosLosCamposLlenos = () => {
    return (
      postulacion !== '' &&
      contratacion !== '' &&
      academico !== '' &&
      sede !== '' &&
      departamento !== '' &&
      amplio !== '' &&
      especifico !== ''
    );
  };
  useEffect(() => {
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
    axios.get(`http://localhost:5000/ofertas?sede_id=${sede}&dept_id=${departamento}&ca_id=${amplio}&ce_id=${especifico}`) 
      .then((response) => {
        setOpcionesOferta(response.data); // Actualiza el estado con los datos recibidos de la API
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de ofertas:", error);
      });


  }, [especifico]);




  return (
    <>
      <div className="body">
        <Navpost />

        <div className="contenedor">
          <div className="postulacion">
            <h1>Bienvenido a la Plataforma ESPE Docentes</h1>
            <h1>Seleccione los campos de su postulación</h1>
            <br />

            <div className="form-group">
              <label for="postulacion">POSTULACIÓN</label>
              <select
                id="postulacion"
                name="postulacion"
                onChange={(e) => {
                  setPostulacion(e.target.value);
                  setContratacion(''); // Reiniciar el valor de Contratación al cambiar Postulación
                  setAcademico(''); // Reiniciar el valor de Personal Académico al cambiar Postulación
                  setSede(''); // Reiniciar el valor de Sede al cambiar Postulación
                  setDepartamento(''); // Reiniciar el valor de Departamento al cambiar Postulación
                  setAmplio(''); // Reiniciar el valor de Campo Amplio al cambiar Postulación
                  setEspecifico(''); // Reiniciar el valor de Campo Específico al cambiar Postulación
                }}
                value={postulacion}
              >
                <option value="">Seleccione una opción</option>
                {opcionesPostulacion.map((opcion) => (
                  <option key={opcion.post_id} value={opcion.post_id}>
                    {opcion.post_periodo}
                  </option>
                ))}
              </select>
            </div>
            {postulacion && (
              <>
                <div className="form-group">
                  <br></br>
                  <label for="contratacion">TIPO DE CONTRATACIÓN</label>
                  <select
                    id="contratacion"
                    name="contratacion"
                    onChange={(e) => {
                      setContratacion(e.target.value);
                      setAcademico('');
                      setSede('');
                      setDepartamento('');
                      setAmplio('');
                      setEspecifico('');
                    }}
                    value={contratacion}
                  >
                    <option value="">Seleccione una opción</option>
                    {opcionesContratacion.map((opcion) => (
                      <option key={opcion.con_id} value={opcion.con_id}>
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
                  <br></br>
                  <label for="academico">TIPO DE PERSONAL ACADÉMICO</label>
                  <select
                    id="academico"
                    name="Academicoo"
                    onChange={(e) => {
                      setAcademico(e.target.value);
                      setSede('');
                      setDepartamento('');
                      setAmplio('');
                      setEspecifico('');
                    }}
                    value={academico}
                  >
                    <option value="">Seleccione una opción</option>
                    {opcionesAcademico.map((opcion) => (
                      <option key={opcion.pa_id} value={opcion.pa_id}>
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
                  <br></br>
                  <label for="sede">SEDE</label>
                  <select
                    id="sede"
                    name="Sede"
                    onChange={(e) => {
                      setSede(e.target.value);
                      setDepartamento('');
                      setAmplio('');
                      setEspecifico('');
                    }}
                    value={sede}
                  >
                    <option value="">Seleccione una opción</option>
                    {opcionesSedes.map((opcion) => (
                      <option key={opcion.sede_id} value={opcion.sede_id}>
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
                  <br></br>
                  <label for="departamento">DEPARTAMENTO</label>
                  <select
                    id="departamento"
                    name="Departamento"
                    onChange={(e) => {
                      setDepartamento(e.target.value);
                      setAmplio('');
                      setEspecifico('');
                    }}
                    value={departamento}
                  >
                    <option value="">Seleccione una opción</option>
                    {opcionesDepartamentos.map((opcion) => (
                      <option key={opcion.dept_id} value={opcion.dept_id}>
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
                  <br></br>
                  <label for="amplio">CAMPO AMPLIO</label>
                  <select
                    id="amplio"
                    name="Amplio"
                    onChange={(e) => {
                      setAmplio(e.target.value);
                      setEspecifico('');
                    }}
                    value={amplio}
                  >
                    <option value="">Seleccione una opción</option>
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
                  <br></br>
                  <label for="especifico">CAMPO ESPECÍFICO</label>
                  <select
                    id="especifico"
                    name="Especifico"
                    onChange={(e) => {
                      setEspecifico(e.target.value);
                    }}
                    value={especifico}
                  >
                    <option value="">Seleccione una opción</option>
                    {opcionesEspecifico.map((opcion) => (
                      <option key={opcion.ce_id} value={opcion.ce_id}>
                        {opcion.ce_nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
            <br></br>
            <button onClick={handleClick}>BUSCAR OFERTAS</button>
            {/* <button onClick={handleButtonClick}>Actividad Docencia</button>
            <button onClick={handleButtonClick}>Actividad Investigacion</button>
            <button onClick={handleButtonClick}>Actividad Vinculacion</button> */}
          </div>
          <div className='visualizar centrado postulacion' id="tabla">
            <table className='mostrar'>
              <tr>
                <th colSpan={7}>OFERTAS</th>
              </tr>
              <tr>
                <th>Vacantes </th>
                <th>Tiempo</th>
                <th>Sede</th>
                <th>Departamento </th>
                <th>Campo Amplio </th>
                <th>Campo Específico </th>
                <th>Seleccionar </th>
              </tr>
              {opcionesOferta.map(val => {
                return <tr>
                  <td>{val.ofe_vacantes}</td>
                  <td>{val.ofe_horas}</td>

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
                  <td>
                    <button onClick={() => mostrarDetalles(val.ofe_vacantes, val.ofe_horas)}>
                      POSTULAR
                    </button></td>

                </tr>
              })}
            </table>
          </div>

        </div>
      </div >
    </>
  );
}

export default Postulacion;
