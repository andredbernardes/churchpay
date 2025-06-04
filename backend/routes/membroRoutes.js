const express = require('express');
const router = express.Router();
const membroController = require('../controllers/membroController');

router.get('/', membroController.listarMembros);
router.post('/', membroController.criarMembro);

module.exports = router;