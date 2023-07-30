const pool = require('../db');

const getAllRequisitos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.requisito');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los requisitos' });
  }
};

const createRequisito = async (req, res) => {
  const { it_id, rq_descripcion } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO public.requisito (it_id, rq_descripcion) VALUES ($1, $2) RETURNING *',
      [it_id, rq_descripcion]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el requisito' });
  }
};

const getRequisitoById = async (req, res) => {
  const { rq_id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.requisito WHERE rq_id = $1', [rq_id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Requisito no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el requisito' });
  }
};

const updateRequisito = async (req, res) => {
  const { rq_id } = req.params;
  const { it_id, rq_descripcion } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.requisito SET it_id = $1, rq_descripcion = $2 WHERE rq_id = $3 RETURNING *',
      [it_id, rq_descripcion, rq_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Requisito no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el requisito' });
  }
};

const deleteRequisito = async (req, res) => {
  const { rq_id } = req.params;

  try {
    const result = await pool.query('DELETE FROM public.requisito WHERE rq_id = $1 RETURNING *', [rq_id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Requisito no encontrado' });
    }
    res.status(200).json({ message: 'Requisito eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el requisito' });
  }
};

module.exports = {
  getAllRequisitos,
  createRequisito,
  getRequisitoById,
  updateRequisito,
  deleteRequisito,
};
