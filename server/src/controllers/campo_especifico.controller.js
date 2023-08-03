const pool = require('../db');

const getAllCampoEspecifico = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.campo_especifico');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los campos específicos' });
  }
};

const createCampoEspecifico = async (req, res) => {
  const { ce_nombre, ce_descripcion, ca_id } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO public.campo_especifico (ce_nombre, ce_descripcion, ca_id) VALUES ($1, $2, $3) RETURNING *',
      [ce_nombre, ce_descripcion, ca_id]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el campo específico' });
  }
};

const getCampoEspecificoById = async (req, res) => {
  const { ce_id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.campo_especifico WHERE ce_id = $1', [ce_id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Campo específico no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el campo específico' });
  }
};

const updateCampoEspecifico = async (req, res) => {
  const { ce_id } = req.params;
  const { ce_nombre, ce_descripcion, ca_id } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.campo_especifico SET ce_nombre = $1, ce_descripcion = $2, ca_id = $3 WHERE ce_id = $4 RETURNING *',
      [ce_nombre, ce_descripcion, ca_id, ce_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Campo específico no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el campo específico' });
  }
};

const deleteCampoEspecifico = async (req, res) => {
  const { ce_id } = req.params;

  try {
    const result = await pool.query('DELETE FROM public.campo_especifico WHERE ce_id = $1 RETURNING *', [ce_id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Campo específico no encontrado' });
    }
    res.status(200).json({ message: 'Campo específico eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el campo específico' });
  }
};

module.exports = {
  getAllCampoEspecifico,
  createCampoEspecifico,
  getCampoEspecificoById,
  updateCampoEspecifico,
  deleteCampoEspecifico,
};
