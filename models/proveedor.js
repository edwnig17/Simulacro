const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    contacto: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    }
});

const Proveedor = mongoose.model('Proveedores', proveedorSchema, 'Proveedores');

module.exports = Proveedor;
