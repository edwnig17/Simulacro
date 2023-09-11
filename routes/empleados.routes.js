const { Router } = require('express');
const { obtenerEmpleados, cantidadVentasPorEmpleado2023 } = require('../controllers/empleados.controller.js');
const router = Router();

router.get('/', obtenerEmpleados);
router.get('/cantidad-ventas-por-empleado-2023', cantidadVentasPorEmpleado2023);
module.exports = router;
