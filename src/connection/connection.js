//IMPORTAR LA BIBLIOTECA DE MONGOOSE
const mongoose = require('mongoose');

const dbConnect = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Conectado a la Base de Datos');
    } catch (error) {
        console.log('Error al conectar la Base de Datos');
        console.log(error.message);
    }
}

module.exports = dbConnect;