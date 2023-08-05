import axios from "axios";

const API = "http://localhost:5000/informacion";

export async function guardarArchivos(archivos) {
  try {
    const formData = new FormData();

    archivos.forEach((archivo) => {
      formData.append('archivo', archivo);
    });

    const response = await axios({
      url: `${API}/upload`,
      method: 'POST',
      data: formData,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
