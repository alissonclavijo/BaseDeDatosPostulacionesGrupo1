const pool = require('../db');

const getAllTitulosExp = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.titulo_exp');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los títulos de experiencia' });
  }
};

const createTituloExp = async (req, res) => {
  const { rq_id, tx_descripcion, tx_detalle, tx_puntaje_min, tx_puntaje_max, tx_puntaje_asignado, tx_observacion } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO public.titulo_exp (rq_id, tx_descripcion, tx_detalle, tx_puntaje_min, tx_puntaje_max, tx_puntaje_asignado, tx_observacion) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [rq_id, tx_descripcion, tx_detalle, tx_puntaje_min, tx_puntaje_max, tx_puntaje_asignado, tx_observacion]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el título de experiencia' });
  }
};

const getTituloExpById = async (req, res) => {
  const { tx_id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.titulo_exp WHERE tx_id = $1', [tx_id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Título de experiencia no encontrado' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el título de experiencia' });
  }
};

const updateTituloExp = async (req, res) => {
  const { tx_id } = req.params;
  const { rq_id, tx_descripcion, tx_detalle, tx_puntaje_min, tx_puntaje_max, tx_puntaje_asignado, tx_observacion } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.titulo_exp SET rq_id = $1, tx_descripcion = $2, tx_detalle = $3, tx_puntaje_min = $4, tx_puntaje_max = $5, tx_puntaje_asignado = $6, tx_observacion = $7 WHERE tx_id = $8 RETURNING *',
      [rq_id, tx_descripcion, tx_detalle, tx_puntaje_min, tx_puntaje_max, tx_puntaje_asignado, tx_observacion, tx_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Título de experiencia no encontrado' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el título de experiencia' });
  }
};

const deleteTituloExp = async (req, res) => {
  const { tx_id } = req.params;

  try {
    const result = await pool.query('DELETE FROM public.titulo_exp WHERE tx_id = $1 RETURNING *', [tx_id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Título de experiencia no encontrado' });
    }

    res.status(200).json({ message: 'Título de experiencia eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el título de experiencia' });
  }
};

module.exports = {
  getAllTitulosExp,
  createTituloExp,
  getTituloExpById,
  updateTituloExp,
  deleteTituloExp,
};
