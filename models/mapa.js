const mongoose = require('mongoose');


const mapaSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    cordenadaX: {
        type: Number,
        required: true
    },
    cordenadaY: {
        type: Number,
        required: true
    },
    Permiso: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Mapa",mapaSchema);