const mongoose = require ('mongoose'),
      moment = require('moment');

const punto7ComunicacionParticiacionSchema = new mongoose.Schema({
    curso:{
        type:Boolean,
        required:true,
        default:false
    },
    difusion:{
        type:Boolean,
        required:true,
        default:false
    },
    interno:{
        type:Boolean,
        required:true,
        default:false
    },
    externo:{
        type:Boolean,
        required:true,
        default:false
    },
    nombreCurso:{
        type:String,
        required:true,
        default:false
    },
    lugar:{
        type:String,
        required:true,
        default:false
    },
    facilitador:{
        type:String,
        required:true,
        default:false
    },
    empresa:{
        type:String,
        required:true,
        default:false
    },
});

module.exports = mongoose.model("Punto 7 Comunicacion Participacion",punto7ComunicacionParticiacionSchema);