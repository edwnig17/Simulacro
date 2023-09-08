const { Router } = require('express');
const { obtenerProveedores , listarProveedoresEnMedicamentos , obtenerMedicamentosProveedorA } = require('../controllers/proveedor.controller.js');

const router = Router();

router.get('/', obtenerProveedores);
router.get('/lista', listarProveedoresEnMedicamentos); //Debe de poner en el postman  http://localhost:8001/api/proveedores/lista
router.get('/medicamentos-a', obtenerMedicamentosProveedorA); //Debe de poner en el postman http://localhost:8001/api/proveedores/medicamentos-a
module.exports = router;
