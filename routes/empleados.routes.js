const { Router } = require('express');
const { obtenerEmpleados } = require('../controllers/empleados.controller.js');
const router = Router();

router.get('/', obtenerEmpleados);

module.exports = router;
