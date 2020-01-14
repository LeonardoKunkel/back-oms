const mongoose = require('mongoose');
const moment = require('moment');

const programaSchema = new mongoose.Schema({

    texto1: {
        type: String,
        require: true,
        default: false,
    },
    fecha1: {
        type: String,
        require: true,
        default: false,
    },
    check1:{
        type: Boolean,
        require: true,
        default: false
    },
    check2:{
        type: Boolean,
        require: true,
        default: false
    },
    check3:{
        type: Boolean,
        require: true,
        default: false
    },
    check4:{
        type: Boolean,
        require: true,
        default: false
    },
})