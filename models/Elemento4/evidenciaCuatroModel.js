const mongoose = require('mongoose')

const evidenciaCuatroSchema = new mongoose.Schema({
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
        type: String,
        required: true,
        default: "falta Campo"
    }
});
module.exports = mongoose.model("evidenciaCuatro",evidenciaCuatroSchema);