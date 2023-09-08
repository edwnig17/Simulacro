const express = require('express');
const connectionDB = require('../config/config.js');
const comprasRouter = require('../routes/compras.routes.js');
const medicamentosRouter = require('../routes/medicamentos.routes.js'); 
const ventasRouter = require('../routes/ventas.routes.js');
const proveedoresRouter = require('../routes/proveedor.routes.js');
const pacientesRouter = require('../routes/paciente.routes.js');
const empleadosRouter = require('../routes/empleados.routes.js');
const recetasRouter = require('../routes/recetas.routes.js');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.app.use(express.json());
        this.comprasPath = "/api/compras";
        this.medicamentosPath = "/api/medicamentos"; 
        this.ventasPath = "/api/ventas";
        this.proveedoresPath = "/api/proveedores";
        this.pacientesPath = "/api/pacientes";
        this.empleadosPath = "/api/empleados";
        this.recetasPath = "/api/recetas";
        this.routes();
        this.conexion();
    }

    routes() {
        this.app.use(this.comprasPath, comprasRouter);
        this.app.use(this.medicamentosPath, medicamentosRouter); 
        this.app.use(this.ventasPath, ventasRouter);
        this.app.use(this.proveedoresPath, proveedoresRouter);
        this.app.use(this.pacientesPath, pacientesRouter);
        this.app.use(this.empleadosPath, empleadosRouter);
        this.app.use(this.recetasPath, recetasRouter); 
    }

    conexion() {
        connectionDB();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor Express en ejecución en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;
