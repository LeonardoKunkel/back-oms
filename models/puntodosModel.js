const mongoose = require('mongoose');

const puntodosSchema =new mongoose.Schema({
    compresor:{
        type: Boolean,
        required: true,
        default: false
    },
    hidroneumatico: {
        type: Boolean,
        required: true,
        default:false
    },
    plantaEmergencia :{
        type: Boolean,
        required: true,
        default: false
    },
    pararayos: {
        type:Boolean,
        required: true,
        default: false,  
    },
    cisterna: {
        type: Boolean,
        required: true,
        default: false
    },
    bombaAgua: {
        type: Boolean,
        required: true,
        default: false
    },
    cambioAceite: {
        type: Boolean,
        required: true,
        default: false
    },
    bodegaLubricantes: {
        type: Boolean,
        required: true,
        default: false
    },
    almacenResiduosPeligrosos: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model("Puntodos",puntodosSchema); 