const Medicamento = require('../models/medicamentos.js');
const Venta = require('../models/ventas.js');
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


const medicamentoMenosVendido2023 = (req, res) => {
    Venta.aggregate([
        { $match: { fechaVenta: { $gte: new Date('2023-01-01'), $lte: new Date('2023-12-31') } } },
        { $unwind: "$medicamentosVendidos" },
        {
            $group: {
                _id: "$medicamentosVendidos.nombreMedicamento",
                totalVendido: { $sum: "$medicamentosVendidos.cantidadVendida" },
            },
        },
        { $sort: { totalVendido: 1 } },
        { $limit: 1 },
    ], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener el medicamento menos vendido en 2023' });
        } else {
            res.json(result[0]);
        }
    });
};

const medicamentosMenosDe50Stock = (req, res) => {
    Medicamento.find({ stock: { $lt: 50 } }, (err, medicamentos) => {
        if (err) {
            res.status(500).json({ error: 'Error al buscar medicamentos con menos de 50 unidades en stock' });
        } else {
            res.json(medicamentos);
        }
    });
};


module.exports = {
    obtenerMedicamentos,
    obtenerMedicamentosAntes2024,
    obtenerTotalMedicamentosProveedor,
    obtenerMedicamentosNoVendidos,
    obtenerMedicamentoMasCaro,
    medicamentoMenosVendido2023,
    medicamentosMenosDe50Stock
}
