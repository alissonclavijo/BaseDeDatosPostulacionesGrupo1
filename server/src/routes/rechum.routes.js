const { Router } = require("express");
const {
  getAllRechum,
  createRechum,
  getRechumById,
  updateRechum,
  deleteRechum,
} = require('../controllers/rechum.controller');

const router = Router();

router.get('/rechum', getAllRechum);
router.post('/rechum', createRechum);
router.get('/rechum/:id', getRechumById);
router.put('/rechum/:id', updateRechum);
router.delete('/rechum/:id', deleteRechum);

module.exports = router;
