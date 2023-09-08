const Receta = require('../models/recetas.js');

obtenerRecetas = async (req, res) => {
    try {
        const recetas = await Receta.find();
        res.json(recetas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener las recetas.' });
    }
}
const obtenerRecetasPorMedico = async (req, res) => {
    try {
        const medicoNombre = 'Dr. Martínez'; 
        const recetas = await Receta.find({ 'empleado.nombre': medicoNombre });
        res.json(recetas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al obtener las recetas del Dr. Martínez.' });
    }
};

module.exports = {
    obtenerRecetas,
    obtenerRecetasPorMedico
};
