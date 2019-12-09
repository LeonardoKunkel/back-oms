const mongoose = require('mongoose');

const evaluacionDeRiesgoSchema =new mongoose.Schema({
    compresor:{
        type: Boolean,
        required: true,
        default: false
    },
    eventos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Evento'
        }
    ]

})

module.exports = mongoose.model("Puntodos",evaluacionDeRiesgoSchema); 