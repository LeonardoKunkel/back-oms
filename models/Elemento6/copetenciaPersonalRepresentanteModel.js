const mongoose = require('mongoose')

const copetenciaPersonalRepresentanteSchema = new mongoose.Schema({
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
    }
})

module.exports = mongoose.model("copetenciaPersonalRepresentante",copetenciaPersonalRepresentanteSchema);