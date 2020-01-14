const mongoose = require('mongoose');
const moment = require('moment')

const programaSchema = new mongoose.Schema({

    texto1: {
        type: String,
        require: true,
        default: false,
    },

    texto2: {
        type: String,
        require: true,
        default: false,
    },
    texto3: {
        type: String,
        require: true,
        default: false,
    },
    texto4: {
        type: String,
        require: true,
        default: false,
    },
    texto5: {
        type: String,
        require: true,
        default: false,
    },
    texto6: {
        type: String,
        require: true,
        default: false,
    },
})