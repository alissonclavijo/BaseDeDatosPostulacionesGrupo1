// api.js
import axios from "axios";

export async function getSolicitud() {
  let solicitud = [];
  let aux = (await axios.get("http://localhost:5000/solicitudes")).data;
  for (let i = 0; i < aux.length; i++) {
    var sol_id = aux[i].sol_id;
    solicitud.push(<option key={sol_id}>{sol_id}</option>);
  }
  return solicitud;
}

export async function getTituloExp() {
  let titulos = [];
  let aux = (await axios.get("http://localhost:5000/titulos_exp")).data;
  for (let i = 0; i < aux.length; i++) {
    var tx_descripcion = aux[i].tx_descripcion;
    titulos.push(<option key={tx_descripcion}>{tx_descripcion}</option>);
  }
  return titulos;
}

export async function getPersonalID() {
  let personal = [];
  let aux = (await axios.get("http://localhost:5000/personal_academico")).data;
  for (let i = 0; i < aux.length; i++) {
    var pa_id = aux[i].pa_id;
    personal.push(<option key={pa_id}>{pa_id}</option>);
  }
  return personal;
}

export async function getPersonalName() {
  let personalName = [];
  let aux = (await axios.get("http://localhost:5000/personal_academico")).data;
  for (let i = 0; i < aux.length; i++) {
    var pa_nombre = aux[i].pa_nombre;
    personalName.push(<option key={pa_nombre}>{pa_nombre}</option>);
  }
  return personalName;
}

export async function getOfertas() {
  let ofertas = [];
  let aux = (await axios.get("http://localhost:5000/ofertas")).data;
  for (let i = 0; i < aux.length; i++) {
    var pa_id = aux[i].pa_id;
    ofertas.push(<option key={pa_id}>{pa_id}</option>);
  }
  return ofertas;
}

export async function fetchCandidatos() {
  try {
    const result = await axios.get("http://localhost:5000/candidatos");
    return result.data;
  } catch (error) {
    console.error("Error al obtener datos de candidatos:", error);
    return [];
  }
  
}
export async function  fetchReCHUM () {
  try {
    const result = await axios.get("http://localhost:5000/rechum");

    return result.data;
  } catch (error) {
    console.error("Error al obtener datos de candidatos:", error);
    return [];
  }
};

export async function Postulacion() {
  try {
    const result = await axios.get("http://localhost:5000/postulacion");
    return result.data;
  } catch (error) {
    console.error("Error al obtener datos de postulacion:", error);
    return [];
  }
}

export async function Contratacion() {
  try {
    const result = await axios.get("http://localhost:5000/contrataciones");
    return result.data;
  } catch (error) {
    console.error("Error al obtener datos de postulacion:", error);
    return [];
  }
}

export async function Actividad() {
  try {
    const result = await axios.get("http://localhost:5000/actividad");
    return result.data;
  } catch (error) {
    console.error("Error al obtener datos de postulacion:", error);
    return [];
  }
}

export async function Sedes() {
  try {
    const result = await axios.get("http://localhost:5000/sedes");
    return result.data;
  } catch (error) {
    console.error("Error al obtener datos de postulacion:", error);
    return [];
  }
}

export async function Departamento() {
  try {
    const result = await axios.get("http://localhost:5000/departamentos");
    return result.data;
  } catch (error) {
    console.error("Error al obtener datos de postulacion:", error);
    return [];
  }
}


export async function campoAmplio() {
  try {
    const result = await axios.get("http://localhost:5000/campo_amplio");
    return result.data;
  } catch (error) {
    console.error("Error al obtener datos de postulacion:", error);
    return [];
  }
}

export async function campoEspecifico() {
  try {
    const result = await axios.get("http://localhost:5000/campo_amplio");
    return result.data;
  } catch (error) {
    console.error("Error al obtener datos de postulacion:", error);
    return [];
  }
}
export async function Solicitud() {
  try {
    const result = await axios.get("http://localhost:5000/solicitudes");
    return result.data;
  } catch (error) {
    console.error("Error al obtener datos de postulacion:", error);
    return [];
  }
}
export async function getDocumentos() {
  try {
    const result = await axios.get("http://localhost:5000/pdfs");
    return result.data;
  } catch (error) {
    console.error("Error al obtener datos de postulacion:", error);
    return [];
  }
}

export async function DocumentoRecursos({cand_id, id_documento}) {
  try {
    const result = await axios.get(`http://localhost:5000/pdfs/${cand_id}/${id_documento}`);
    return result.data;
  } catch (error) {
    console.error("Error al obtener datos de postulacion:", error);
    return [];
  }
}




/* Post*/
export async function SolicitudPost(postData){
  try {
    const response = await fetch('http://localhost:5000/solicitudes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud POST');
    }

    const dataFromServer = await response.json();
    return dataFromServer;
  } catch (error) {
    console.error('Error en la solicitud POST:', error);
    throw error;
  }
};

export async function ActualizarSolicitud(candId, solId, nuevaNotaFinal) {
  const url = `http://localhost:5000/solicitudes/${candId}/${solId}`; // URL del recurso a actualizar
  const postData = {
    nota_final: nuevaNotaFinal,
    // Otras propiedades si es necesario
  };

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud PUT');
    }

    const dataFromServer = await response.json();
    return dataFromServer;
  } catch (error) {
    console.error('Error en la solicitud PUT:', error);
    throw error;
  }
}

