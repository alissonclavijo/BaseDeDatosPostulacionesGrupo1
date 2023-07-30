const pool = require('../db');

const getAllContrataciones = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.contratacion');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las contrataciones' });
  }
};

const createContratacion = async (req, res) => {
  const { con_nombre } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO public.contratacion (con_nombre) VALUES ($1) RETURNING *',
      [con_nombre]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la contratación' });
  }
};

const getContratacionById = async (req, res) => {
  const { con_id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.contratacion WHERE con_id = $1', [con_id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Contratación no encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la contratación' });
  }
};

const updateContratacion = async (req, res) => {
  const { con_id } = req.params;
  const { con_nombre } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.contratacion SET con_nombre = $1 WHERE con_id = $2 RETURNING *',
      [con_nombre, con_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Contratación no encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la contratación' });
  }
};

const deleteContratacion = async (req, res) => {
  const { con_id } = req.params;

  try {
    const result = await pool.query('DELETE FROM public.contratacion WHERE con_id = $1 RETURNING *', [con_id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Contratación no encontrada' });
    }
    res.status(200).json({ message: 'Contratación eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la contratación' });
  }
};

module.exports = {
  getAllContrataciones,
  createContratacion,
  getContratacionById,
  updateContratacion,
  deleteContratacion,
};
