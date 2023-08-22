const pool = require('../db');

const getAllOfertas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.oferta');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las ofertas' });
  }
};

const createOferta = async (req, res) => {
  const {
    post_id,
    con_id,
    ce_id,
    ca_id,
    sede_id,
    dept_id,
    pa_id,
    act_id,
    ofe_vacantes,
    ofe_horas,
  } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO public.oferta (post_id, con_id, ce_id, ca_id, sede_id, dept_id, pa_id, act_id, ofe_vacantes, ofe_horas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [post_id, con_id, ce_id, ca_id, sede_id, dept_id, pa_id, act_id, ofe_vacantes, ofe_horas]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la oferta' });
  }
};

const getOfertaById = async (req, res) => {
  const { ofe_id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.oferta WHERE ofe_id = $1', [ofe_id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Oferta no encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la oferta' });
  }
};

const getOfertaByParams = async (req, res) => {
  const { sede_id } = req.params;
  const { dept_id } = req.params;
  const { ca_id } = req.params;
  const { ce_id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM public.oferta WHERE sede_id = $1 AND dept_id = $2 AND ca_id = $3 AND ce_id = $4;', [sede_id, dept_id,ca_id,ce_id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Oferta no encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la oferta' });
  }
};

const updateOferta = async (req, res) => {
  const { ofe_id } = req.params;
  const {
    post_id,
    con_id,
    ce_id,
    ca_id,
    sede_id,
    dept_id,
    pa_id,
    act_id,
    ofe_vacantes,
    ofe_horas,
  } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.oferta SET post_id = $1, con_id = $2, ce_id = $3, ca_id = $4, sede_id = $5, dept_id = $6, pa_id = $7, act_id = $8, ofe_vacantes = $9, ofe_horas = $10 WHERE ofe_id = $11 RETURNING *',
      [
        post_id,
        con_id,
        ce_id,
        ca_id,
        sede_id,
        dept_id,
        pa_id,
        act_id,
        ofe_vacantes,
        ofe_horas,
        ofe_id,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Oferta no encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la oferta' });
  }
};

const deleteOferta = async (req, res) => {
  const { ofe_id } = req.params;

  try {
    const result = await pool.query('DELETE FROM public.oferta WHERE ofe_id = $1 RETURNING *', [ofe_id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Oferta no encontrada' });
    }
    res.status(200).json({ message: 'Oferta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la oferta' });
  }
};

module.exports = {
  getAllOfertas,
  createOferta,
  getOfertaById,
  updateOferta,
  deleteOferta,
  getOfertaByParams,
};
