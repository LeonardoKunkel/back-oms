const mongoose = require('mongoose'),
      moment = require('moment');

const punto5FuncionesResponsabilidades = new mongoose.Schema({
    fecha:{
        type:Date,
        required:true,
        default:false
    },
    nombreEncargado:{
        type:String,
        required:true,
        default:false
    },
    correoElectronico:{
        type:String,
        required:true,
        default:false
    },
    telefono:{
        type:Number,
        required:true,
        default:false
    },
    razonSocial:{
        type:String,
        required:true,
        default:false
    },
    calleNumero:{
        type:String,
        required:true,
        default:false
    },
    estado:{
        type:String,
        required:true,
        default:false
    },
    colonia:{
        type:String,
        required:true,
        default:false
    }
});
module.exports= mongoose.model("Punto 5 Funciones Responsabilidades Autoridad",punto5FuncionesResponsabilidades)