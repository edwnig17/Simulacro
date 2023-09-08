const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    fechaVenta: {
        type: Date,
        required: true
    },
    paciente: {
        nombre: {
            type: String,
            required: true
        },
        direccion: {
            type: String,
            required: true
        }
    },
    empleado: {
        nombre: {
            type: String,
            required: true
        },
        cargo: {
            type: String,
            required: true
        }
    },
    medicamentosVendidos: [{
        nombreMedicamento: {
            type: String,
            required: true
        },
        cantidadVendida: {
            type: Number,
            required: true
        },
        precio: {
            type: Number,
            required: true
        }
    }]
});

const Venta= mongoose.model('Ventas', ventaSchema , 'Ventas');

module.exports = Venta;
