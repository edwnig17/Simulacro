const Paciente = require('../models/paciente.js');

const obtenerPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.find();
        res.json(pacientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener los pacientes.' });
    }
};

module.exports = {
    obtenerPacientes
};
