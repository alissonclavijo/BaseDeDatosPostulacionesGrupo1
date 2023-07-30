const pool = require('../db');

const getAllRechum = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.rechum');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los registros de rechum' });
  }
};

const createRechum = async (req, res) => {
    const {
      rh_cargo,
      rh_correo,
      rh_password,
      rh_nombre1,
      rh_nombre2,
      rh_apellido1,
      rh_apellido2,
    } = req.body;
  
    try {
      const result = await pool.query(
        'INSERT INTO public.rechum (rh_cargo, rh_correo, rh_password, rh_nombre1, rh_nombre2, rh_apellido1, rh_apellido2) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [
          rh_cargo,
          rh_correo,
          rh_password,
          rh_nombre1,
          rh_nombre2,
          rh_apellido1,
          rh_apellido2,
        ]
      );
  
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear el registro en rechum' });
    }
  };

const getRechumById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.rechum WHERE rh_id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Registro de rechum no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el registro de rechum' });
  }
};

const updateRechum = async (req, res) => {
  const { id } = req.params;
  const {
    rh_cargo,
    rh_correo,
    rh_password,
    rh_nombre1,
    rh_nombre2,
    rh_apellido1,
    rh_apellido2,
  } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.rechum SET rh_cargo = $1, rh_correo = $2, rh_password = $3, rh_nombre1 = $4, rh_nombre2 = $5, rh_apellido1 = $6, rh_apellido2 = $7 WHERE rh_id = $8 RETURNING *',
      [rh_cargo, rh_correo, rh_password, rh_nombre1, rh_nombre2, rh_apellido1, rh_apellido2, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Registro de rechum no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el registro de rechum' });
  }
};

const deleteRechum = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM public.rechum WHERE rh_id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Registro de rechum no encontrado' });
    }
    res.status(200).json({ message: 'Registro de rechum eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el registro de rechum' });
  }
};

module.exports = {
  getAllRechum,
  createRechum,
  getRechumById,
  updateRechum,
  deleteRechum,
};
