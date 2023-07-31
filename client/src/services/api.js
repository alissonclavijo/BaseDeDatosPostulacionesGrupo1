// frontend/src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/candidatos', // Reemplaza esto con la URL del servidor backend
});

export default api;
