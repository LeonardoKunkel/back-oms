const mongoose = require('mongoose')

const copeteciaPersonalDespachadoresSchema = new mongoose.Schema({
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
module.exports = mongoose.model("copetenciaPersonalDespachadores",copeteciaPersonalDespachadoresSchema);