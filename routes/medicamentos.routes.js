const { Router } = require('express');
const { obtenerMedicamentos , obtenerMedicamentosAntes2024, obtenerTotalMedicamentosProveedor , obtenerMedicamentosNoVendidos, obtenerMedicamentoMasCaro } = require('../controllers/medicamentos.controllers.js');
const router = Router();


router.get('/', obtenerMedicamentos);
router.get('/antes2024', obtenerMedicamentosAntes2024);   //Debe de poner en el postmaan http://localhost:puerto/api/medicamentos/antes2024
router.get('/totalMedicamentosProveedor', obtenerTotalMedicamentosProveedor);   //Debe de poner en el postmaan http://localhost:8001/api/medicamentos/totalMedicamentosProveedor
router.get('/medicamentosNoVendidos', obtenerMedicamentosNoVendidos)
router.get('/medicamentosMasCaro', obtenerMedicamentoMasCaro);
module.exports = router;
