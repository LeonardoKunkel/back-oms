const mongoose = require('mongoose');
const moment = require('moment');

const anexoSchema = new mongoose.Schema({

    texto1: {
        type: String,
        require: true,
        default: false
    },

    texto2: {
        type: String,
        require: true,
        default: false
    }
})
