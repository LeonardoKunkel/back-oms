const mongoose = require('mongoose')

const copetenciaPersonalMantenimientoSchema = new mongoose.Schema({
    requerimientosFisicos:{ 
        type:String
    },
    herramientasEquipos:{ 
        type:String
    },
    equipoProteccion:{ 
        type:String
    },
    nivelAcademico:{
        type:String
    },
    personalCargo:{
        type:String
    },

})

module.exports = mongoose.model("copetenciaPersonalMantenimiento",copetenciaPersonalMantenimientoSchema);