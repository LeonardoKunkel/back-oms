const mongoose = require('mongoose');
const moment = require('moment');

const evaluacionSchema = new mongoose.Schema({

    texto1: {
        type: String,
        require: true,
        default: false
    },

    texto2: {
        type: String,
        require: true,
        default: false
    },

    texto3: {
        type: String,
        require: true,
        default: false
    },

    texto4: {
        type: String,
        require: true,
        default: false
    },

    texto5: {
        type: String,
        require: true,
        default: false
    },

    texto6: {
        type: String,
        require: true,
        default: false
    },

    texto7: {
        type: String,
        require: true,
        default: false
    },
    texto8: {
        type: String,
        require: true,
        default: false
    },
    texto9: {
        type: String,
        require: true,
        default: false
    },
    texto10: {
        type: String,
        require: true,
        default: false
    },
    texto11: {
        type: String,
        require: true,
        default: false
    },
    texto12: {
        type: String,
        require: true,
        default: false
    },
    texto13: {
        type: String,
        require: true,
        default: false
    },
    texto14: {
        type: String,
        require: true,
        default: false
    },
    fecha1: {
        type: String,
        require: true,
        default: false
    },
})