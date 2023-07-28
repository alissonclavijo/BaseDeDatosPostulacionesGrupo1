const pool = require('../db');

const getAllUsuarios = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM USUARIO');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};

// Variable para llevar el seguimiento del último ID generado
let lastUserId = 0;

const createUsuario = async (req, res) => {
  const { USU_CORREO, USU_PASSWORD, USU_NOMBRE1, USU_NOMBRE2, USU_APELLIDO1, USU_APELLIDO2 } = req.body;
  
  try {
    // Incrementa el valor del último ID generado para obtener el nuevo ID
    lastUserId++;
    
    // Realiza la inserción en la base de datos con el nuevo ID
    const result = await pool.query(
      'INSERT INTO USUARIO (USU_ID, USU_CORREO, USU_PASSWORD, USU_NOMBRE1, USU_NOMBRE2, USU_APELLIDO1, USU_APELLIDO2) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [lastUserId, USU_CORREO, USU_PASSWORD, USU_NOMBRE1, USU_NOMBRE2, USU_APELLIDO1, USU_APELLIDO2]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};


// Obtener un usuario por su ID
const getUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM USUARIO WHERE USU_ID = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};

// Actualizar un usuario por su ID
const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { USU_CORREO, USU_PASSWORD, USU_NOMBRE1, USU_NOMBRE2, USU_APELLIDO1, USU_APELLIDO2 } = req.body;
  try {
    const result = await pool.query(
      'UPDATE USUARIO SET USU_CORREO = $1, USU_PASSWORD = $2, USU_NOMBRE1 = $3, USU_NOMBRE2 = $4, USU_APELLIDO1 = $5, USU_APELLIDO2 = $6 WHERE USU_ID = $7 RETURNING *',
      [USU_CORREO, USU_PASSWORD, USU_NOMBRE1, USU_NOMBRE2, USU_APELLIDO1, USU_APELLIDO2, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario por su ID
const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM USUARIO WHERE USU_ID = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
};

module.exports = {
  getAllUsuarios,
  createUsuario,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
};
