const { Router } = require('express');
const { obtenerPacientes } = require('../controllers/pacientes.controllers.js');
const router = Router();

router.get('/', obtenerPacientes);

module.exports = router;
