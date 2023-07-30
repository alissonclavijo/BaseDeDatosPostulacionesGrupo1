const pool = require('../db');

const getAllSolicitudes = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.solicitud');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las solicitudes' });
  }
};

const createSolicitud = async (req, res) => {
  const { cand_id, sol_id, rh_id, sol_aprobacion } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO public.solicitud (cand_id, sol_id, rh_id, sol_aprobacion) VALUES ($1, $2, $3, $4) RETURNING *',
      [cand_id, sol_id, rh_id, sol_aprobacion]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la solicitud' });
  }
};

const getSolicitudByIds = async (req, res) => {
  const { cand_id, sol_id } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM public.solicitud WHERE cand_id = $1 AND sol_id = $2',
      [cand_id, sol_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Solicitud no encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la solicitud' });
  }
};

const updateSolicitud = async (req, res) => {
  const { cand_id, sol_id } = req.params;
  const { rh_id, sol_aprobacion } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.solicitud SET rh_id = $1, sol_aprobacion = $2 WHERE cand_id = $3 AND sol_id = $4 RETURNING *',
      [rh_id, sol_aprobacion, cand_id, sol_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Solicitud no encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la solicitud' });
  }
};

const deleteSolicitud = async (req, res) => {
  const { cand_id, sol_id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM public.solicitud WHERE cand_id = $1 AND sol_id = $2 RETURNING *',
      [cand_id, sol_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Solicitud no encontrada' });
    }
    res.status(200).json({ message: 'Solicitud eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la solicitud' });
  }
};

module.exports = {
  getAllSolicitudes,
  createSolicitud,
  getSolicitudByIds,
  updateSolicitud,
  deleteSolicitud,
};
