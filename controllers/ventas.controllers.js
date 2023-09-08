const Venta = require('../models/ventas.js');

const obtenerVentas = async (req, res) => {
    try {
        const ventas = await Venta.find();
        res.json(ventas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener las ventas ' });
    }
};
const obtenerRecetas = async (req, res) => {
    try {
        const fechaLimite = new Date('2023-01-01');
        const ventas = await Venta.find({ fechaVenta: { $gte: fechaLimite } }).populate('medicamentosVendidos');
        res.json(ventas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener las recetas emitidas después de 2023.' });
    }
};


const obtenerTotalVentasParacetamol = async (req, res) => {
    try {
        const medicamento = 'Paracetamol';
        const ventas = await Venta.find({ 'medicamentosVendidos.nombreMedicamento': medicamento });
        const totalVentas = ventas.reduce((total, venta) => {
            const medicamentoVenta = venta.medicamentosVendidos.find((m) => m.nombreMedicamento === medicamento);
            return total + medicamentoVenta.cantidadVendida;
        }, 0);
        res.json({ totalVentas });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener el total de ventas de Paracetamol.' });
    }
};

const obtenerTotalDinero = async (req, res) => {
    try {
        const ventas = await Venta.find();
        const totalDinero = ventas.reduce((total, venta) => total + venta.totalVenta, 0);
        res.json({ totalDinero });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener el total de dinero .' });
    }
};
module.exports = {
    obtenerVentas,
    obtenerRecetas,
    obtenerTotalVentasParacetamol,
    obtenerTotalDinero
};
