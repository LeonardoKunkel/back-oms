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
    fecha9:{
        type: String,
        require: true,
        default: moment().format('DD MM YYYY')
    },
    texto1:{
        type: String,
        require: true,
        default: ''
    },
    texto2:{
        type: String,
        require: true,
        default: ''
    },
    texto3:{
        type: String,
        require: true,
        default: ''
    },
    texto4:{
        type: String,
        require: true,
        default: ''
    },
    texto5:{
        type: String,
        require: true,
        default: ''
    },
    texto6:{
        type: String,
        require: true,
        default: ''
    },
    texto7:{
        type: String,
        require: true,
        default: ''
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
    check17:{
        type: Boolean,
        require: true,
        default: false
    },
    check18:{
        type: Boolean,
        require: true,
        default: false
    },
    check19:{
        type: Boolean,
        require: true,
        default: false
    },
    check20:{
        type: Boolean,
        require: true,
        default: false
    },
    check21:{
        type: Boolean,
        require: true,
        default: false
    },
    check22:{
        type: Boolean,
        require: true,
        default: false
    },
    check23:{
        type: Boolean,
        require: true,
        default: false
    },
    check24:{
        type: Boolean,
        require: true,
        default: false
    },
    check25:{
        type: Boolean,
        require: true,
        default: false
    },
    check26:{
        type: Boolean,
        require: true,
        default: false
    },
    check27:{
        type: Boolean,
        require: true,
        default: false
    },
    check28:{
        type: Boolean,
        require: true,
        default: false
    },
    check29:{
        type: Boolean,
        require: true,
        default: false
    },
    check30:{
        type: Boolean,
        require: true,
        default: false
    },
    check31:{
        type: Boolean,
        require: true,
        default: false
    },
    check32:{
        type: Boolean,
        require: true,
        default: false
    },
    check33:{
        type: Boolean,
        require: true,
        default: false
    },
    check34:{
        type: Boolean,
        require: true,
        default: false
    },
});
module.exports = mongoose.model("administracionCambiosTecnologia",cambiosdetecSchema)