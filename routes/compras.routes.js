const { Router } = require('express');
const { obtenerCompras } = require('../controllers/compras.controllers.js');
const router = Router();


router.get('/', obtenerCompras);

module.exports = router;
