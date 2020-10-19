const mongoose = require('mongoose');

const simulacro2Schema = new mongoose.Schema({
    mes: {type: String},
    aviso: {type: String},
    fecha: {type: String},
    descripcionEmergencia: {type: String},
    claseSimulacro: {type: String},
});

module.exports = mongoose.model('Simulacro por sismo', simulacro2Schema);
