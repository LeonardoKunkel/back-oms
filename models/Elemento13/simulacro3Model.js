const mongoose = require('mongoose');

const simulacro3Schema = new mongoose.Schema({
    mes: {type: String},
    aviso: {type: String},
    fecha: {type: String},
    descripcionEmergencia: {type: String},
    claseSimulacro: {type: String},
});

module.exports = mongoose.model('Simulacro por derrame', simulacro3Schema);
