// actividadController.js

const pool = require('../db');

const getAllActividades = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.actividad');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las actividades' });
  }
};

const createActividad = async (req, res) => {
  const { act_nombre, act_descripcion } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO public.actividad (act_nombre, act_descripcion) VALUES ($1, $2) RETURNING *',
      [act_nombre, act_descripcion]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la actividad' });
  }
};

const updateActividad = async (req, res) => {
  const { act_id } = req.params;
  const { act_nombre, act_descripcion } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.actividad SET act_nombre = $1, act_descripcion = $2 WHERE act_id = $3 RETURNING *',
      [act_nombre, act_descripcion, act_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Actividad no encontrada' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la actividad' });
  }
};

const deleteActividad = async (req, res) => {
  const { act_id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM public.actividad WHERE act_id = $1 RETURNING *',
      [act_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Actividad no encontrada' });
    }

    res.status(200).json({ message: 'Actividad eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la actividad' });
  }
};

module.exports = {
  getAllActividades,
  createActividad,
  updateActividad,
  deleteActividad,
};
