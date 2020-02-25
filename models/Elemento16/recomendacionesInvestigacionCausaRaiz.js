const mongoose = require('mongoose');
const moment = require('momnet');

const recomendacionesSchema = new mongoose.Schema({

    texto1: {
        type: String,
        require: true,
        default: '',
    },

    texto2: {
        type: String,
        require: true,
        default: '',
    },
    texto3: {
        type: String,
        require: true,
        default: '',
    },
    texto4: {
        type: String,
        require: true,
        default: '',
    },
    texto5: {
        type: String,
        require: true,
        default: '',
    },
    texto6: {
        type: String,
        require: true,
        default: '',
    },
    texto7: {
        type: String,
        require: true,
        default: '',
    },
    texto8: {
        type: String,
        require: true,
        default: '',
    },
    texto9: {
        type: String,
        require: true,
        default: '',
    },
    texto10: {
        type: String,
        require: true,
        default: '',
    },
    texto11: {
        type: String,
        require: true,
        default: '',
    },
    texto12: {
        type: String,
        require: true,
        default: '',
    },
    texto13: {
        type: String,
        require: true,
        default: '',
    },
    fecha1: {
        type: String,
        require: true,
        default: '',
    },
    fecha2: {
        type: String,
        require: true,
        default: '',
    },
    fecha3: {
        type: String,
        require: true,
        default: '',
    },
    fecha4: {
        type: String,
        require: true,
        default: '',
    },
    fecha5: {
        type: String,
        require: true,
        default: '',
    },
});
module.exports = mongoose.model("recomendacionesInvestigacionCausaRaiz",recomendacionesSchema)