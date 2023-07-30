const { Router } = require("express");
const {
  getAllCandidatos,
  createCandidato,
  getCandidatoById,
  updateCandidato,
  deleteCandidato,
} = require('../controllers/candidato');

const router = Router();

router.get('/candidatos', getAllCandidatos);
router.post('/candidatos', createCandidato);
router.get('/candidatos/:id', getCandidatoById);
router.put('/candidatos/:id', updateCandidato);
router.delete('/candidatos/:id', deleteCandidato);

module.exports = router;
