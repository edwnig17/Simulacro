const { Router } = require('express');
const { obtenerMedicamentos , obtenerMedicamentosAntes2024, obtenerTotalMedicamentosProveedor , obtenerMedicamentosNoVendidos, obtenerMedicamentoMasCaro, medicamentoMenosVendido2023, medicamentosMenosDe50Stock} = require('../controllers/medicamentos.controllers.js');
const router = Router();


router.get('/', obtenerMedicamentos);
router.get('/antes2024', obtenerMedicamentosAntes2024);   //Debe de poner en el postmaan http://localhost:puerto/api/medicamentos/antes2024
router.get('/totalMedicamentosProveedor', obtenerTotalMedicamentosProveedor);   //Debe de poner en el postmaan http://localhost:8001/api/medicamentos/totalMedicamentosProveedor
router.get('/medicamentosNoVendidos', obtenerMedicamentosNoVendidos)
router.get('/medicamentosMasCaro', obtenerMedicamentoMasCaro);
router.get('/medicamentosMenosVendido2023', medicamentoMenosVendido2023);
router.get('/medicamentosMenosDe50Stock', medicamentosMenosDe50Stock);
module.exports = router;
