const { Router } = require('express');
const { obtenerVentas , obtenerRecetas , obtenerTotalVentasParacetamol, obtenerTotalDinero ,promedioMedicamentosCompradosPorVenta} = require('../controllers/ventas.controllers.js');

const router = Router();

router.get('/', obtenerVentas);
router.get('/recetas2023', obtenerRecetas); //Debe de poner en el postman esto http://localhost:8001/api/ventas/recetas2023
router.get('/totalVentasParacetamol', obtenerTotalVentasParacetamol); //Debe de poner en el postman esto http://localhost:8001/api/ventas/totalVentasParacetamol
router.get('/totalDinero', obtenerTotalDinero); //Debe de poner en el postman  http://localhost:8001/api/ventas/totalDinero
router.get('/promedio-medicamentos-por-venta', promedioMedicamentosCompradosPorVenta);

module.exports = router;
