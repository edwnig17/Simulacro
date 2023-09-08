const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    fechaContratacion: {
        type: Date,
        required: true
    }
});

const Empleado = mongoose.model('Empleados', empleadoSchema, 'Empleados');

module.exports = Empleado;
