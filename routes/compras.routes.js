const { Router } = require('express');
const { obtenerCompras, gananciaTotalPorProveedor2023} = require('../controllers/compras.controllers.js');
const router = Router();


router.get('/', obtenerCompras);
router.get('/ganancia-total-por-proveedor-2023', gananciaTotalPorProveedor2023);
module.exports = router;
