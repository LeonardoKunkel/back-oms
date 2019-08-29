const mongoose = require('mongoose');
const moment = require('moment');

const puntocincoSchema = new mongoose.Schema({
    fecha:{
        type: String,
        required: true,
        default: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    nombreEncargado: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    razonSocial: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    cp: {
        type: Number,
        required: true,
        default: 00000 
    },
    estado: {
        type: String,
        required: true,
    },
    colonia: {
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model("Puntocinco",puntocincoSchema);