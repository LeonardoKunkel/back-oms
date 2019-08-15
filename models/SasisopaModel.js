const   mongoose = require('mongoose');

const sasisopaModelSchema = new mongoose.Schema({
    puntoUno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoUno'
    },
    puntoDos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoDos'
    },
    puntoTres: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoTres'
    },
    puntoCuatro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoCuatro'
    },
    puntoCinco: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoCinco'
    },
    puntoSeis: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoSeis'
    },
    puntoSiete: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoSiete'
    },
    puntoOcho: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoOcho'
    },
    puntoNueve: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoNueve'
    },
    puntoDiez: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoDiez'
    },
    puntoOnce: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoOnce'
    },
    puntoDoce: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoDoce'
    },
    puntoTrece: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoTrece'
    },
    puntoCatorce: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoCatorce'
    },
    puntoQuince: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoQuince'
    },
    puntoDieciseis: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoDieciseis'
    },
    puntoDiecisiete: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoDiecisiete'
    },
    puntoDieciocho: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PuntoDieciocho'
    }
});

module.exports = mongoose.model('Sasisopa', sasisopaModelSchema);