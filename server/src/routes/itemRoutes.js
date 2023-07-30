const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item');

router.get('/items', itemController.getAllItems);
router.post('/items', itemController.createItem);
router.get('/items/:it_id', itemController.getItemById);
router.put('/items/:it_id', itemController.updateItem);
router.delete('/items/:it_id', itemController.deleteItem);

module.exports = router;
