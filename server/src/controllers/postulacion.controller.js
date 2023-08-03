const pool = require('../db');

const getAllPostulaciones = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.postulacion');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las postulaciones' });
  }
};

const createPostulacion = async (req, res) => {
  const { post_periodo } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO public.postulacion (post_periodo) VALUES ($1) RETURNING *',
      [post_periodo]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la postulación' });
  }
};

const getPostulacionById = async (req, res) => {
  const { post_id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.postulacion WHERE post_id = $1', [post_id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Postulación no encontrada' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la postulación' });
  }
};
const getPostulacionesNombre = async (req, res) => {

  try {
    const result = await pool.query('SELECT post_periodo FROM public.postulacion');

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Postulación no encontrada' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la postulación' });
  }
};

const updatePostulacion = async (req, res) => {
  const { post_id } = req.params;
  const { post_periodo } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.postulacion SET post_periodo = $1 WHERE post_id = $2 RETURNING *',
      [post_periodo, post_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Postulación no encontrada' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la postulación' });
  }
};

const deletePostulacion = async (req, res) => {
  const { post_id } = req.params;

  try {
    const result = await pool.query('DELETE FROM public.postulacion WHERE post_id = $1 RETURNING *', [post_id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Postulación no encontrada' });
    }

    res.status(200).json({ message: 'Postulación eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la postulación' });
  }
};

module.exports = {
  getAllPostulaciones,
  createPostulacion,
  getPostulacionById,
  updatePostulacion,
  deletePostulacion,
  getPostulacionesNombre,
};
