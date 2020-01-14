const mongoose = require('mongoose');
const moment = require('moment');

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
    fecha1: {
        type: String,
        require: true,
        default: false,
    },
    fecha2: {
        type: String,
        require: true,
        default: false,
    },
    fecha3: {
        type: String,
        require: true,
        default: false,
    },
    fecha4: {
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
    check5:{
        type: Boolean,
        require: true,
        default: false
    },
    check6:{
        type: Boolean,
        require: true,
        default: false
    },
    check7:{
        type: Boolean,
        require: true,
        default: false
    },
    check8:{
        type: Boolean,
        require: true,
        default: false
    },
    check9:{
        type: Boolean,
        require: true,
        default: false
    },
    check10:{
        type: Boolean,
        require: true,
        default: false
    },
    check11:{
        type: Boolean,
        require: true,
        default: false
    },
    check12:{
        type: Boolean,
        require: true,
        default: false
    },
    check13:{
        type: Boolean,
        require: true,
        default: false
    },
    check14:{
        type: Boolean,
        require: true,
        default: false
    },
    check15:{
        type: Boolean,
        require: true,
        default: false
    },
    check16:{
        type: Boolean,
        require: true,
        default: false
    },
})