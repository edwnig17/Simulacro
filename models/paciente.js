const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }
});

const Paciente = mongoose.model('Pacientes', pacienteSchema, 'Pacientes');

module.exports = Paciente;
