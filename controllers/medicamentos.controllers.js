const Medicamento = require('../models/medicamentos.js');

const obtenerMedicamentos= async (req, res) => {
    try {
        const medicamentos = await Medicamento.find({ stock: { $lt: 50 } });
        res.json(medicamentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener los medicamentos.' });
    }
};
const obtenerMedicamentosAntes2024 = async (req, res) => {
    try {
        const fechaLimite = new Date('2024-01-01');
        const medicamentos = await Medicamento.find({ fechaExpiracion: { $lt: fechaLimite } });
        res.json(medicamentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener los medicamentos que caducan antes de 2024.' });
    }
};

const obtenerTotalMedicamentosProveedor = async (req, res) => {
    try {
        const medicamentos = await Medicamento.aggregate([
            {
                $group: {
                    _id: '$proveedor',
                    total: { $sum: 1 }
                }
            }
        ]);
        res.json(medicamentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener el total de medicamentos por proveedor.' });
    }
}
obtenerMedicamentosNoVendidos = async (req, res) => {
    try {
        const medicamentos = await Medicamento.aggregate([
            {
                $group: {
                    _id: '$vendido',
                    total: { $sum: 1 }
                }
            }
        ]);
        res.json(medicamentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener el total de medicamentos vendidos.' });
    }
}
 const obtenerMedicamentoMasCaro = async (req, res) => {
    try {
        const medicamentos = await Medicamento.aggregate([
            {
                $group: {
                    _id: '$precio',
                    total: { $sum: 1 }
                }
            }
        ]);
        res.json(medicamentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener el total de medicamentos más caros.' });
    }
 }
module.exports = {
    obtenerMedicamentos,
    obtenerMedicamentosAntes2024,
    obtenerTotalMedicamentosProveedor,
    obtenerMedicamentosNoVendidos,
    obtenerMedicamentoMasCaro
}
