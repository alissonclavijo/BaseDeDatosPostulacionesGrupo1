const pool = require('../db');

const getAllCandidatos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.candidato');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los candidatos' });
  }
};

const getCandidatoByCedula = async (req, res) => {
  const { cedula } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.candidato WHERE cand_num_identificacion = $1', [cedula]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Candidato no encontrado' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el candidato por cédula' });
  }
};


const getCandidatoById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.candidato WHERE cand_id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Candidato no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el candidato' });
  }
};
const getCandidatoByCorreo = async (req, res) => {
  const { correo } = req.params;

  try {
    const result = await pool.query('SELECT * FROM public.candidato WHERE cand_correo = $1', [correo]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Candidato no encontrado' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el candidato por correo electrónico' });
  }
};

const createCandidato = async (req, res) => {
  const {
    cand_tipo_identificacion,
    cand_num_identificacion,
    cand_sexo,
    cand_titulo,
    cand_fecha_nacimiento,
    cand_correo,
    cand_password,
    cand_nombre1,
    cand_nombre2,
    cand_apellido1,
    cand_apellido2,
  } = req.body;

  try {
    // Consultar si el correo electrónico ya existe en la base de datos
    const existingCorreo = await pool.query(
      'SELECT * FROM public.candidato WHERE cand_correo = $1',
      [cand_correo]
    );
    // Consultar si el número de identificación ya existe en la base de datos
    const existingNumIdentificacion = await pool.query(
      'SELECT * FROM public.candidato WHERE cand_num_identificacion = $1',
      [cand_num_identificacion]
    );

    // Si el correo electrónico ya existe, devolver una respuesta de error
    if (existingCorreo.rows.length > 0) {
      return res.status(400).json({ message: 'El correo electrónico ya está en uso.' });
    }

    // Si el correo electrónico y el número de identificación no existen, proceder con la inserción
    const result = await pool.query(
      'INSERT INTO public.candidato (cand_tipo_identificacion, cand_num_identificacion, cand_sexo, cand_titulo, cand_fecha_nacimiento, cand_correo, cand_password, cand_nombre1, cand_nombre2, cand_apellido1, cand_apellido2) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
      [
        cand_tipo_identificacion,
        cand_num_identificacion,
        cand_sexo,
        cand_titulo,
        cand_fecha_nacimiento,
        cand_correo,
        cand_password,
        cand_nombre1,
        cand_nombre2,
        cand_apellido1,
        cand_apellido2,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el candidato' });
  }
};

const updateCandidato = async (req, res) => {
  const { id } = req.params;
  const {
    cand_tipo_identificacion,
    cand_num_identificacion,
    cand_sexo,
    cand_titulo,
    cand_fecha_nacimiento,
    cand_correo,
    cand_password,
    cand_nombre1,
    cand_nombre2,
    cand_apellido1,
    cand_apellido2,
  } = req.body;

  try {
    const result = await pool.query(
      'UPDATE public.candidato SET cand_tipo_identificacion = $1, cand_num_identificacion = $2, cand_sexo = $3, cand_titulo = $4, cand_fecha_nacimiento = $5, cand_correo = $6, cand_password = $7, cand_nombre1 = $8, cand_nombre2 = $9, cand_apellido1 = $10, cand_apellido2 = $11 WHERE cand_id = $12 RETURNING *',
      [
        cand_tipo_identificacion,
        cand_num_identificacion,
        cand_sexo,
        cand_titulo,
        cand_fecha_nacimiento,
        cand_correo,
        cand_password,
        cand_nombre1,
        cand_nombre2,
        cand_apellido1,
        cand_apellido2,
        id,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Candidato no encontrado' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el candidato' });
  }
};

const deleteCandidato = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM public.candidato WHERE cand_id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Candidato no encontrado' });
    }

    res.status(200).json({ message: 'Candidato eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el candidato' });
  }
};

module.exports = {
  getAllCandidatos,
  getCandidatoById,
  createCandidato,
  updateCandidato,
  deleteCandidato,
  getCandidatoByCedula,
  getCandidatoByCorreo,
};
