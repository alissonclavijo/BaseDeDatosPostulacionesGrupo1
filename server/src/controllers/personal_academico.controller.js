const pool = require('../db');

const getAllPersonalAcademico = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.personal_academico');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el personal académico' });
  }
};

const getPersonalAcademicoById = async (req, res) => {
  const { pa_id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.personal_academico WHERE pa_id = $1', [pa_id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Personal Academico no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el Personal Academico' });
  }
};

const createPersonalAcademico = async (req, res) => {
  const { pa_nombre, pa_descripcion } = req.body;

  try {
    // Realiza la inserción en la base de datos
    const result = await pool.query(
      'INSERT INTO public.personal_academico (pa_nombre, pa_descripcion) VALUES ($1, $2) RETURNING *',
      [pa_nombre, pa_descripcion]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el personal académico' });
  }
};

const updatePersonalAcademico = async (req, res) => {
  const { pa_id } = req.params;
  const { pa_nombre, pa_descripcion } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.personal_academico SET pa_nombre = $1, pa_descripcion = $2 WHERE pa_id = $3 RETURNING *',
      [pa_nombre, pa_descripcion, pa_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Personal académico no encontrado' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el personal académico' });
  }
};

const deletePersonalAcademico = async (req, res) => {
  const { pa_id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM public.personal_academico WHERE pa_id = $1 RETURNING *',
      [pa_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Personal académico no encontrado' });
    }

    res.status(200).json({ message: 'Personal académico eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el personal académico' });
  }
};

module.exports = {
  getAllPersonalAcademico,
  getPersonalAcademicoById,
  createPersonalAcademico,
  updatePersonalAcademico,
  deletePersonalAcademico,
};
