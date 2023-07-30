const pool = require('../db');

const getAllItems = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.item');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los items' });
  }
};

const createItem = async (req, res) => {
  const { pa_id, it_nombre } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO public.item (pa_id, it_nombre) VALUES ($1, $2) RETURNING *',
      [pa_id, it_nombre]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el item' });
  }
};

const getItemById = async (req, res) => {
  const { it_id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.item WHERE it_id = $1', [it_id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Item no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el item' });
  }
};

const updateItem = async (req, res) => {
  const { it_id } = req.params;
  const { pa_id, it_nombre } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.item SET pa_id = $1, it_nombre = $2 WHERE it_id = $3 RETURNING *',
      [pa_id, it_nombre, it_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Item no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el item' });
  }
};

const deleteItem = async (req, res) => {
  const { it_id } = req.params;

  try {
    const result = await pool.query('DELETE FROM public.item WHERE it_id = $1 RETURNING *', [it_id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Item no encontrado' });
    }
    res.status(200).json({ message: 'Item eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el item' });
  }
};

module.exports = {
  getAllItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
};
