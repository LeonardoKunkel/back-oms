const mongoose = require('mongoose'),
      moment = require('moment');

const punto6CopetenciaPersonalSchema = new mongoose.Schema({
    area:{
        type:String,
        required: true,
        default : false
    },
    nombre:{
        type:String,
        required: true,
        default : false
    },
    caracteristicasPersonales:{
        type:String,
        required: true,
        default : false
    },
    requerimientosFisicos:{
        type:String,
        required: true,
        default : false
    },
    conocimientosFisiscos:{
        type:String,
        required: true,
        default : false
    },
    deztrezasTecnicas:{
        type:String,
        required: true,
        default : false
    },
    nivelAcademico:{
        type:String,
        required: true,
        default : false
    },
    objetivoPuesto:{
        type:String,
        required: true,
        default : false
    },
    funcionesEspecificas:{
        type:String,
        required: true,
        default : false
    },
    personalCargo:{
        type:String,
        required: true,
        default : false
    },
    herramientasEquipos:{
        type:String,
        required: true,
        default : false
    },
    proteccionPersonal:{
        type:String,
        required: true,
        default : false
    },
})
module.exports = mongoose.model("Punto 6 Copetencia Personal",punto6CopetenciaPersonalSchema)