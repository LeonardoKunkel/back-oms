const mongoose = require('mongoose')

const copeteciaPersonalDespachadoresSchema = new mongoose.Schema({

    caracteristicasPersonales:{ 
        type:String,
        required:true
    },
    requerimientosFisicos:{ 
        type:String,
        required:true
    },
    herramientasEquipos:{ 
        type:String,
        required:true
    },
    equipoProteccion:{ 
        type:String,
        required:true
    },

})
module.exports = mongoose.model("copetenciaPersonalDespachadores",copeteciaPersonalDespachadoresSchema);