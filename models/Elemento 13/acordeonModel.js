const mongoose = require('mongoose');
const moment = require('moment');

const acordeonSchema = new mongoose.Schema({
    mes:{
        type:String,
        required:true
    },
    aviso:{
        type:String,
    },
    fecha:{
        type:String,
    },
    descripcionEmergencia:{
        type:String,
    },
    claseSimulacro:{
        type:String,
    }
})
module.exports = mongoose.model('Acordeon', acordeonSchema);