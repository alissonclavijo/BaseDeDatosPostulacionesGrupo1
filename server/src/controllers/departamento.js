const pool = require('../db');

const getAllDepartamentos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.departamento');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los departamentos' });
  }
};

const createDepartamento = async (req, res) => {
  const { dept_nombre, dept_descripcion } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO public.departamento (dept_nombre, dept_descripcion) VALUES ($1, $2) RETURNING *',
      [dept_nombre, dept_descripcion]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el departamento' });
  }
};

const getDepartamentoById = async (req, res) => {
  const { dept_id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.departamento WHERE dept_id = $1', [dept_id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Departamento no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el departamento' });
  }
};

const updateDepartamento = async (req, res) => {
  const { dept_id } = req.params;
  const { dept_nombre, dept_descripcion } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.departamento SET dept_nombre = $1, dept_descripcion = $2 WHERE dept_id = $3 RETURNING *',
      [dept_nombre, dept_descripcion, dept_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Departamento no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el departamento' });
  }
};

const deleteDepartamento = async (req, res) => {
  const { dept_id } = req.params;

  try {
    const result = await pool.query('DELETE FROM public.departamento WHERE dept_id = $1 RETURNING *', [dept_id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Departamento no encontrado' });
    }
    res.status(200).json({ message: 'Departamento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el departamento' });
  }
};

module.exports = {
  getAllDepartamentos,
  createDepartamento,
  getDepartamentoById,
  updateDepartamento,
  deleteDepartamento,
};
