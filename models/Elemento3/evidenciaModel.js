const mongoose = require('mongoose'),
      moment = require('moment');

const evidenciaSchema = new mongoose.Schema({
    archivo:{
        type : String,
        required : true,
        default : false
    },
    foto:{
        type : String ,
        required : true,
        default : false
    },
    imagen:{
        type : String,
        required : true,
        default : false
    },
    descripcion:{
        type:String,
        required:true,
        default:false
    }
});
module.exports = mongoose.model("Punto Tres Evidencia",evidenciaSchema);