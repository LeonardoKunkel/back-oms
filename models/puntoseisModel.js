const mongoose = require('mongoose');
const moment =  require('moment');

const puntoseisSchema = new mongoose.Schema({
    jefeInmediato: {
        type: String,
        required: true
    },
    caracteristicas: {
        type: String,
        required: true
    },
    requerimientosFisicos: {
        type: String,
        required: true
    },
    conocimientosEspecificos: {
        type: String,
        required: true
    },
    destrezasTecnicas : {
        type: String,
        required: true
    },
    nivelAcademico : {
        type: String,
        required: true
    },
    objetivoPuesto: {
        type: String,
        required: true
    },
    funcionesEsprcificas: {
        type: String,
        required: true
    },
    personalCargo: {
        type: String,
        required: true
    },
    herramientas: {
        type: String,
        required: true
    },
    equiposProcctecion : {
        type: String,
        required: true
    },
    nuevoIngreso: {
        type: Boolean,
        required: true,
        default: false
    },
    promocion: {
        type: Boolean,
        required: true,
        default: false
    },
    reentrenamiento: {
        type: Boolean,
        required: true,
        default: false
    },
    actulizacionTrinual: {
        type: Boolean,
        required: true,
        default: false
    },
    inconformidadAuditoria: {
        type: Boolean,
        required: true,
        default: false
    },
    bajoDesempeño: {
        type: Boolean,
        required: true,
        default: false
    },
    recomendacionIcr: {
        type: Boolean,
        required: true,
        default: false
    },
    NoObjetivos: {
        type: Boolean,
        required: true,
        default: false
    },
    situacionActual: {
        type: Boolean,
        required: true,
        default: false
    },
    situacionDeseada: {
        type: Boolean,
        required: true,
        default: false
    },
    objetivosNecesidad: {
        type: Boolean,
        required: true,
        default: false
    },
    temasCapacitacion : {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model("Punseis",puntoseisSchema);