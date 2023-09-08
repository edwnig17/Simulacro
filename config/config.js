const mongoose = require('mongoose');
const conectarDB = async ()=>{
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});
        const url = `Conectado al servidor de : ${connectionDB.connection.host} - al puerto: ${connectionDB.connection.port} vas súper todo`;
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
};
module.exports = conectarDB;