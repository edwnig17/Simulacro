const Proveedor = require('../models/proveedor.js');
const Medicamento = require('../models/medicamentos.js');

const obtenerProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener los proveedores.' });
    }
};

const listarProveedoresEnMedicamentos = async (req, res) => {
    try {
        const medicamentos = await Medicamento.find().select('proveedor');
        const proveedores = medicamentos.map(medicamento => medicamento.proveedor);
        res.json(proveedores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al listar los proveedores en medicamentos.' });
    }
};
const obtenerMedicamentosProveedorA = async (req, res) => {
    try {
        const medicamentosProveedorA = await Medicamento.find({ 'proveedor.nombre': 'ProveedorA' });

        if (medicamentosProveedorA.length > 0) {
            res.json(medicamentosProveedorA);
        } else {
                res.json({ mensaje: 'No se encontraron medicamentos del Proveedor A.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener los medicamentos del Proveedor A.' });
    }
};

module.exports = {
    obtenerProveedores,
    listarProveedoresEnMedicamentos,
    obtenerMedicamentosProveedorA
};
