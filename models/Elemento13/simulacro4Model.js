const mongoose = require('mongoose');

const simulacro4Schema = new mongoose.Schema({
    mes: {type: String},
    aviso: {type: String},
    fecha: {type: String},
    descripcionEmergencia: {type: String},
    claseSimulacro: {type: String},
});

module.exports = mongoose.model('Simulacro por incendio en inst. elec', simulacro4Schema);
