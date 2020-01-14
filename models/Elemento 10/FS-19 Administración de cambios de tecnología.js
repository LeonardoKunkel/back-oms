const mongoose = require('mongoose');
const moment = require('moment');

const cambiosdetecSchema = new mongoose.Schema({

    fecha1:{
        type: String,
        require: true,
        default: moment().format('DD MM YYYY')
    },
    fecha2:{
        type: String,
        require: true,
        default: moment().format('DD MM YYYY')
    },
    fecha3:{
        type: String,
        require: true,
        default: moment().format('DD MM YYYY')
    },
    fecha4:{
        type: String,
        require: true,
        default: moment().format('DD MM YYYY')
    },
    fecha5:{
        type: String,
        require: true,
        default: moment().format('DD MM YYYY')
    },
    fecha6:{
        type: String,
        require: true,
        default: moment().format('DD MM YYYY')
    },
    fecha7:{
        type: String,
        require: true,
        default: moment().format('DD MM YYYY')
    },
    fecha8:{
        type: String,
        require: true,
        default: moment().format('DD MM YYYY')
    },
    texto1:{
        type: String,
        require: true,
        default: false
    },
    texto2:{
        type: String,
        require: true,
        default: false
    },
    texto3:{
        type: String,
        require: true,
        default: false
    },
    texto4:{
        type: String,
        require: true,
        default: false
    },
    texto5:{
        type: String,
        require: true,
        default: false
    },
    texto6:{
        type: String,
        require: true,
        default: false
    },
    texto7:{
        type: String,
        require: true,
        default: false
    },
    texto8:{
        type: String,
        require: true,
        default: false
    },
    texto9:{
        type: String,
        require: true,
        default: false
    },
    texto10:{
        type: String,
        require: true,
        default: false
    },
    texto11:{
        type: String,
        require: true,
        default: false
    },
    texto12:{
        type: String,
        require: true,
        default: false
    },
    texto13:{
        type: String,
        require: true,
        default: false
    },
    texto14:{
        type: String,
        require: true,
        default: false
    },
    texto15:{
        type: String,
        require: true,
        default: false
    },
    texto16:{
        type: String,
        require: true,
        default: false
    },
    texto17:{
        type: String,
        require: true,
        default: false
    },
    texto18:{
        type: String,
        require: true,
        default: false
    },
    texto19:{
        type: String,
        require: true,
        default: false
    },
    texto20:{
        type: String,
        require: true,
        default: false
    },
    texto21:{
        type: String,
        require: true,
        default: false
    },
    texto22:{
        type: String,
        require: true,
        default: false
    },
    texto23:{
        type: String,
        require: true,
        default: false
    },
    texto24:{
        type: String,
        require: true,
        default: false
    }

})