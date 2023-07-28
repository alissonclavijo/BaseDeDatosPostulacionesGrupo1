const { Router } = require("express");
const { getAllUsuarios, createUsuario, getUsuarioById, updateUsuario, deleteUsuario, } = require('../controllers/usuario.controller');
const db = require('../db');

const router = Router();

router.get('/usuarios', getAllUsuarios);
router.post('/usuarios', createUsuario);
router.get('/usuarios/:id', getUsuarioById);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);


module.exports = router;
