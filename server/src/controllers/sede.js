const pool = require('../db');

const getAllSedes = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.sede');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las sedes' });
  }
};

const createSede = async (req, res) => {
  const { sede_nombre, sede_descripcion } = req.body;

  try {
    // Realiza la inserción en la base de datos
    const result = await pool.query(
      'INSERT INTO public.sede (sede_nombre, sede_descripcion) VALUES ($1, $2) RETURNING *',
      [sede_nombre, sede_descripcion]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la sede' });
  }
};

const getSedeById = async (req, res) => {
  const { sede_id } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM public.sede WHERE sede_id = $1',
      [sede_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Sede no encontrada' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la sede' });
  }
};

const updateSede = async (req, res) => {
  const { sede_id } = req.params;
  const { sede_nombre, sede_descripcion } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.sede SET sede_nombre = $1, sede_descripcion = $2 WHERE sede_id = $3 RETURNING *',
      [sede_nombre, sede_descripcion, sede_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Sede no encontrada' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la sede' });
  }
};

const deleteSede = async (req, res) => {
  const { sede_id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM public.sede WHERE sede_id = $1 RETURNING *',
      [sede_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Sede no encontrada' });
    }

    res.status(200).json({ message: 'Sede eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la sede' });
  }
};

module.exports = {
  getAllSedes,
  createSede,
  getSedeById,
  updateSede,
  deleteSede,
};
