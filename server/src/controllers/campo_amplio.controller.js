// campoAmplioController.js

const pool = require('../db');

const getAllCamposAmplios = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.campo_amplio');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los campos amplios' });
  }
};
const getCamposAmpliosById = async (req, res) => {
  const { ca_id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.campo_amplio WHERE ca_id = $1', [ca_id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Campo Amplio no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el Campo Amplio' });
  }
};

const createCampoAmplio = async (req, res) => {
  const { ca_nombre, ca_descripcion } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO public.campo_amplio (ca_nombre, ca_descripcion) VALUES ($1, $2) RETURNING *',
      [ca_nombre, ca_descripcion]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el campo amplio' });
  }
};

module.exports = {
  getAllCamposAmplios,
  getCamposAmpliosById,
  createCampoAmplio,
};
