const mongoose = require('mongoose');

const copetenciaPersonalJefeModelSchema = new mongoose.Schema({
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

module.exports = mongoose.model("copetenciaPersonalJefe",copetenciaPersonalJefeModelSchema);