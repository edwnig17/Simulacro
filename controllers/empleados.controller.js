const Empleado = require('../models/empleado.js');

const obtenerEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener los empleados.' });
    }
};

module.exports = {
    obtenerEmpleados
};
