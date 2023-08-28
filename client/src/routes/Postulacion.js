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
  const [ofertaFinal, setOfertaFinal] = useState('');
  const [detalles, setDetalles] = useState('');


  const mostrarDetalles = (vacantes, tiempo, ofe_id) => {
    const datosOferta = obtenerDatos();
    console.log(ofe_id)
    setDetalles(`Vacantes: ${vacantes}, Tiempo: ${tiempo}`);
    swal({
      title: '',
      content: {
        element: "div",
        attributes: {
          innerHTML: `Verifique los datos<br/>Solo puede postular una vez por concurso.<br/>Verifique los datos antes de enviar. <br/><br/>Detalles de la postulación seleccionada<br/>Sede: ${datosOferta.sede_nombre}<br/>Departamento: ${datosOferta.dept_descripcion} (${datosOferta.dept_nombre}) <br/>Campo Amplio: ${datosOferta.ca_nombre}<br/>Campo Específico: ${datosOferta.ce_nombre}<br/>Tiempo: ${tiempo} horas<br/>Vacantes: ${vacantes}<br/>`,
        },
      },
      icon: '',
      buttons: ["Regresar", "Postular"],
    }).then((value) => {
      console.log(value)
      if (value) {
        postularOferta(ofe_id);
        postulacionExitosa();
        navigate("/postulacion"); // Navega a "/home" si se hace clic en "Postular"
      }
    });

  };
  function postularOferta(ofertaId) {

    console.log(`Postulación para oferta con ID: ${ofertaId}`);
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
  function ocultarTabla() {
    // Obtener el elemento con el id "tabla"
    var div = document.getElementById('tabla');
    // Verificar si se encontró el elemento
    if (div) {
      // Cambiar el estilo para mostrar el div
      div.style.display = 'none';
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
      console.log(postulacion);
      console.log(contratacion);
      console.log(academico);
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
  function eliminarDuplicados(arr) {
    const uniqueSet = new Set(arr);
    return [...uniqueSet];
  }
  function obtenerDatos() {
    const datos = {};
  
    opcionesSedes.forEach((valor) => {
      if (valor.sede_id === ofertaFinal.sede_id) {
        datos.sede_nombre = valor.sede_nombre;
      }
    });
  
    opcionesDepartamentos.forEach((valor) => {
      if (valor.dept_id === ofertaFinal.dept_id) {
        datos.dept_descripcion = valor.dept_descripcion;
        datos.dept_nombre = valor.dept_nombre;
      }
    });
  
    opcionesAmplio.forEach((valor) => {
      if (valor.ca_id === ofertaFinal.ca_id) {
        datos.ca_nombre = valor.ca_nombre;
      }
    });
  
    opcionesEspecifico.forEach((valor) => {
      if (valor.ce_id === ofertaFinal.ce_id) {
        datos.ce_nombre = valor.ce_nombre;
      }
    });
  
    return datos;
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/ofertas`)
      .then((response) => {
        // Actualiza el estado con los datos recibidos de la API
        setOpcionesOferta(response.data);

        // Realiza cualquier operación que dependa de opcionesOferta aquí
        const opciones = response.data.map((aa) => aa.post_id);

        // Ahora, dentro de este bloque, obtenemos las opciones de postulación
        axios.get(`http://localhost:5000/postulaciones?post_id=${opciones}`)
          .then((response) => {
            setOpcionesPostulacion(response.data); // Actualiza el estado con los datos recibidos de la API
          })
          .catch((error) => {
            console.error("Error al obtener las opciones de postulación:", error);
          });
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de ofertas:", error);
      });
  }, []);


  useEffect(() => {
    if (opcionesOferta.length === 0) {
      return; // No hagas nada si opcionesOferta aún no se ha actualizado
    }

    const segunPostulacion = opcionesOferta.filter((opcion) => opcion.post_id == postulacion);
    const opciones = segunPostulacion.map((aa) => aa.con_id);
    const opcionesSinRepetir = eliminarDuplicados(opciones);
    // Crear un array de promesas para las solicitudes Axios
    const axiosPromises = opcionesSinRepetir.map((opcion) => {
      return axios.get(`http://localhost:5000/contrataciones/${opcion}`);
    });
    
    // Esperar a que todas las solicitudes se completen
    Promise.all(axiosPromises)
      .then((responses) => {
        // responses es un array de respuestas de Axios, cada una correspondiente a una solicitud
        const opcionesContratacion = responses.map((response) => response.data);
        setOpcionesContratacion(opcionesContratacion);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de contratación:", error);
      });
  }, [postulacion, opcionesOferta]);

  useEffect(() => {
    if (opcionesOferta.length === 0) {
      return; // No hagas nada si opcionesOferta aún no se ha actualizado
    }

    const segunContratacion = opcionesOferta.filter((opcion) => opcion.con_id == contratacion);
    const opciones = segunContratacion.map((aa) => aa.pa_id);
    const opcionesSinRepetir = eliminarDuplicados(opciones);

    // Crear un array de promesas para las solicitudes Axios
    const axiosPromises = opcionesSinRepetir.map((opcion) => {
      return axios.get(`http://localhost:5000/personal_academico/${opcion}`);
    });

    // Esperar a que todas las solicitudes se completen
    Promise.all(axiosPromises)
      .then((responses) => {
        // responses es un array de respuestas de Axios, cada una correspondiente a una solicitud
        const opcionesAcademico = responses.map((response) => response.data);
        setOpcionesAcademico(opcionesAcademico);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de personal academico:", error);
      });
    // axios.get("http://localhost:5000/personal_academico") // Cambia la URL de la API con la que te conectas a la base de datos
    //   .then((response) => {
    //     setOpcionesAcademico(response.data); // Actualiza el estado con los datos recibidos de la API
    //   })
    //   .catch((error) => {
    //     console.error("Error al obtener las opciones de personal académico:", error);
    //   });
  }, [contratacion]);
  useEffect(() => {
    if (opcionesOferta.length === 0) {
      return; // No hagas nada si opcionesOferta aún no se ha actualizado
    }

    const segunAcademico = opcionesOferta.filter((opcion) => opcion.pa_id == academico);
    console.log(segunAcademico);
    const opciones = segunAcademico.map((aa) => aa.sede_id);
    console.log(opciones);
    const opcionesSinRepetir = eliminarDuplicados(opciones);

    // Crear un array de promesas para las solicitudes Axios
    const axiosPromises = opcionesSinRepetir.map((opcion) => {
      return axios.get(`http://localhost:5000/sedes/${opcion}`);
    });

    // Esperar a que todas las solicitudes se completen
    Promise.all(axiosPromises)
      .then((responses) => {
        // responses es un array de respuestas de Axios, cada una correspondiente a una solicitud
        const opcionesSedes = responses.map((response) => response.data);
        setOpcionesSedes(opcionesSedes);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de sedes:", error);
      });
  }, [academico]);
  useEffect(() => {
    if (opcionesOferta.length === 0) {
      return; // No hagas nada si opcionesOferta aún no se ha actualizado
    }

    const segunSede = opcionesOferta.filter((opcion) => opcion.sede_id == sede);
    console.log(segunSede);
    const opciones = segunSede.map((aa) => aa.dept_id);
    console.log(opciones);
    const opcionesSinRepetir = eliminarDuplicados(opciones);

    // Crear un array de promesas para las solicitudes Axios
    const axiosPromises = opcionesSinRepetir.map((opcion) => {
      return axios.get(`http://localhost:5000/departamentos/${opcion}`);
    });

    // Esperar a que todas las solicitudes se completen
    Promise.all(axiosPromises)
      .then((responses) => {
        // responses es un array de respuestas de Axios, cada una correspondiente a una solicitud
        const opcionesDepartamentos = responses.map((response) => response.data);
        setOpcionesDepartamentos(opcionesDepartamentos);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de departamentos:", error);
      });
  }, [sede]);
  useEffect(() => {
    if (opcionesOferta.length === 0) {
      return; // No hagas nada si opcionesOferta aún no se ha actualizado
    }
    const segunDepartamento = opcionesOferta.filter((opcion) => opcion.dept_id == departamento);
    console.log(segunDepartamento);
    const opciones = segunDepartamento.map((aa) => aa.ca_id);
    console.log(opciones);
    const opcionesSinRepetir = eliminarDuplicados(opciones);

    // Crear un array de promesas para las solicitudes Axios
    const axiosPromises = opcionesSinRepetir.map((opcion) => {
      return axios.get(`http://localhost:5000/campo_amplio/${opcion}`);
    });

    // Esperar a que todas las solicitudes se completen
    Promise.all(axiosPromises)
      .then((responses) => {
        // responses es un array de respuestas de Axios, cada una correspondiente a una solicitud
        const opcionesAmplio = responses.map((response) => response.data);
        setOpcionesAmplio(opcionesAmplio);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de campo amplio:", error);
      });
  }, [departamento]);
  useEffect(() => {
    if (opcionesOferta.length === 0) {
      return; // No hagas nada si opcionesOferta aún no se ha actualizado
    }

    const segunAmplio = opcionesOferta.filter((opcion) => opcion.ca_id == amplio);
    console.log(segunAmplio);
    const opciones = segunAmplio.map((aa) => aa.ce_id);
    console.log(opciones);
    const opcionesSinRepetir = eliminarDuplicados(opciones);

    // Crear un array de promesas para las solicitudes Axios
    const axiosPromises = opcionesSinRepetir.map((opcion) => {
      return axios.get(`http://localhost:5000/campo_especifico/${opcion}`);
    });

    // Esperar a que todas las solicitudes se completen
    Promise.all(axiosPromises)
      .then((responses) => {
        // responses es un array de respuestas de Axios, cada una correspondiente a una solicitud
        const opcionesEspecifico = responses.map((response) => response.data);
        setOpcionesEspecifico(opcionesEspecifico);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de campo específico:", error);
      });
  }, [amplio]);
  useEffect(() => {
    axios.get(`http://localhost:5000/ofertas/${sede}/${departamento}/${amplio}/${especifico}/${postulacion}/${contratacion}/${academico}`)
      .then((response) => {
        setOfertaFinal(response.data); // Actualiza el estado con los datos recibidos de la API       
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
                  ocultarTabla();
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
                      ocultarTabla();
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
                      ocultarTabla();
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
                      ocultarTabla();
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
                      ocultarTabla();
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
                      ocultarTabla();
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
                      ocultarTabla();
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
            <button onClick={handleClick}>MOSTRAR DETALLES DE OFERTA</button>
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
                <th>Vacantes</th>
                <th>Tiempo</th>
                <th>Sede</th>
                <th>Departamento</th>
                <th>Campo Amplio</th>
                <th>Campo Específico</th>
                <th>Seleccionar</th>
              </tr>
              <tr>
                <td>{ofertaFinal.ofe_vacantes}</td>
                <td>{ofertaFinal.ofe_horas}</td>
                <td>
                  {opcionesSedes.map((valor) => {
                    if (valor.sede_id == ofertaFinal.sede_id) {
                      return valor.sede_nombre;
                    }
                  })}
                </td>
                <td>
                  {opcionesDepartamentos.map((valor) => {
                    if (valor.dept_id == ofertaFinal.dept_id) {
                      return valor.dept_nombre;
                    }
                  })}
                </td>
                <td>
                  {opcionesAmplio.map((valor) => {
                    if (valor.ca_id == ofertaFinal.ca_id) {
                      return valor.ca_nombre;
                    }
                  })}
                </td>
                <td>
                  {opcionesEspecifico.map((valor) => {
                    if (valor.ce_id == ofertaFinal.ce_id) {
                      return valor.ce_nombre;
                    }
                  })}
                </td>
                <td>
                  <button
                    onClick={() =>
                      mostrarDetalles(
                        ofertaFinal.ofe_vacantes,
                        ofertaFinal.ofe_horas,
                        ofertaFinal.ofe_id
                      )
                    }
                  >
                    POSTULAR
                  </button>
                </td>
              </tr>
            </table>

          </div>

        </div>
      </div >
    </>
  );
}

export default Postulacion;
