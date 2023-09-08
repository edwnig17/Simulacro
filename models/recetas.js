const mongoose = require('mongoose');

const recetaSchema = new mongoose.Schema({
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
    medicamentosRecetados: [{
        nombreMedicamento: {
            type: String,
            required: true
        },
        cantidadRecetada: {
            type: Number,
            required: true
        }
    }]
});

const Receta = mongoose.model('recetas', recetaSchema ,  'recetas');

module.exports = Receta;
