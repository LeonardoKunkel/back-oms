
    const mongoose = require('mongoose')

const punto5FuncionesResponsabilidades = new mongoose.Schema({
    nombre:{ 
        type:String,
        required:true,
        default:false},
    nombreEstacion:{ 
        type:String,
        required:true,
        default:false},
    correo:{ 
        type:String,
        required:true,
        default:false},
    telefono:{ 
        type:String,
        required:true,
        default:false},
    estado:{ 
        type:String,
        required:true,
        default:false},
    ciudad:{ 
        type:String,
        required:true,
        default:false},
    colonia:{ 
        type:String,
        required:true,
        default:false},
    cp:{ 
        type:String,
        required:true,
        default:false},
    calle:{ 
        type:String,
        required:true,
        default:false}
});
module.exports= mongoose.model("cartaDesignacion",punto5FuncionesResponsabilidades)