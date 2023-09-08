const mongoose = require('mongoose');

const medicamentoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    fechaExpiracion: {
        type: Date,
        required: true
    },
    proveedor: {
        nombre: {
            type: String,
            required: true
        },
        contacto: {
            type: String,
            required: true
        }
    }
});

const Medicamento = mongoose.model('Medicamentos', medicamentoSchema , 'Medicamentos');

module.exports = Medicamento;
