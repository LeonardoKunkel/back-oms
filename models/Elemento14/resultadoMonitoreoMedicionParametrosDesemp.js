const mongoose = require('mongoose');
const moment = require('moment')

const resultadomonitoreoSchema = new mongoose.Schema({

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
});
module.exports = mongoose.model("resultadoMonitoreoMedicionParametrosDesemp",resultadomonitoreoSchema)