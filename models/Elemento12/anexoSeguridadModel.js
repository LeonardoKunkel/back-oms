const mongoose = require('mongoose');
const moment = require('moment');

const anexoSeguridadSchema = new mongoose.Schema({

    regla1: {
        type: String,
        default: ''
    },

    regla2: {
        type: String,
        default: ''
    },

    regla3: {
        type: String,
        default: ''
    },

    regla4: {
        type: String,
        default: ''
    },

    regla5: {
        type: String,
        default: ''
    },

    regla6: {
        type: String,
        default: ''
    },

    regla7: {
        type: String,
        default: ''
    },

    regla8: {
        type: String,
        default: ''
    },

    regla9: {
        type: String,
        default: ''
    }
});
module.exports = mongoose.model("anexoSeguridad",anexoSeguridadSchema)