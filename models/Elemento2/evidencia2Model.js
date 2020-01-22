const mongoose = require('mongoose'),
      moment =  require('moment');

const evidenciaDosSchema = new mongoose.Schema({
    archivo:{
        type : String
    },
    foto:{
        type : String
    },
    imagen:{
        type : String
    },
    descripcion:{
        type:String,
        required:true,
        default:false
    }
});

module.exports = mongoose.model("Punto Dos Evidencia",evidenciaDosSchema);