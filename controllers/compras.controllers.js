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

module.exports = {
    obtenerCompras
};
