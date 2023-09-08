const mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({
  fechaCompra: {
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
  },
  medicamentosComprados: [{
    nombreMedicamento: {
      type: String,
      required: true
    },
    cantidadComprada: {
      type: Number,
      required: true
    },
    precioCompra: {
      type: Number,
      required: true
    }
  }]
});

const Compra = mongoose.model('Compras', compraSchema , 'Compras' );

module.exports = Compra;
