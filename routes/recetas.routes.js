const { Router } = require('express');
const { obtenerRecetas , obtenerRecetasPorMedico } = require('../controllers/recetas.controller.js');
const router = Router();
router.get('/', obtenerRecetas);
router.get('/por-medico', obtenerRecetasPorMedico); // Debe de poner en el postman http://localhost:8001/api/recetas/por-medico

module.exports = router;
