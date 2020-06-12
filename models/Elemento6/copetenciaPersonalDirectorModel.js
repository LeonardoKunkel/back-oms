const mongoose = require('mongoose')

const copetenciaPersonalDirectorSchema = new mongoose.Schema({
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

module.exports = mongoose.model("copetenciaPersonalDirector",copetenciaPersonalDirectorSchema);