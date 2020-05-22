const mongoose = require('mongoose');

const dieciochoSchema = new mongoose.Schema ({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    edad: {
        type: String
    },
    telefono: {
        type: String
    },
    mail: {
        type: String
    },
});

module.exports = mongoose.model('Dieciocho', dieciochoSchema);
