const Compra = require('../models/compras.js');

const obtenerCompras = async (req, res) => {
    try {
        const compras = await Compra.find();
        res.json(compras);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener las compras.' });
    }
};

const gananciaTotalPorProveedor2023 = (req, res) => {
    Compra.aggregate([
        { $match: { fechaCompra: { $gte: new Date('2023-01-01'), $lte: new Date('2023-12-31') } } },
        {
            $group: {
                _id: "$proveedor.nombre",
                gananciaTotal: { $sum: { $multiply: ["$medicamentosComprados.precioCompra", "$medicamentosComprados.cantidadComprada"] } },
            },
        },
    ])
    .exec() 
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json({ error: 'Error al obtener la ganancia total por proveedor en 2023' });
    });
};
module.exports = {
    obtenerCompras,
    gananciaTotalPorProveedor2023
};
