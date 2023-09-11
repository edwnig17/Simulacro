const Empleado = require('../models/empleado.js');
const Venta = require('../models/ventas.js');
const obtenerEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener los empleados.' });
    }
};

const cantidadVentasPorEmpleado2023 = (req, res) => {
    Venta.aggregate([
        {
            $match: {
                fechaVenta: {
                    $gte: new Date('2023-01-01'),
                    $lte: new Date('2023-12-31')
                }
            }
        },
        {
            $group: {
                _id: "$empleado.nombre",
                cantidadVentas: { $sum: 1 }
            }
        }
    ])
    .exec() // Utiliza el método exec() para ejecutar la consulta
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json({ error: 'Error al obtener la cantidad de ventas por empleado en 2023' });
    });
};
module.exports = {
    obtenerEmpleados,
    cantidadVentasPorEmpleado2023
};
