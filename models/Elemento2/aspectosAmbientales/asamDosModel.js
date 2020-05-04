const mongoose = require('mongoose');

const asamDosModelSchema = new mongoose.Schema({
    F19: {
        type: String,
        required: true
    },
    F20: {
        type: String,
        required: true
    },
    F21: {
        type: String,
        required: true
    },
    F22: {
        type: String,
        required: true
    },
    F23: {
        type: String,
        required: true
    },
    F24: {
        type: String,
        required: true
    },
    F25: {
        type: String,
        required: true
    },
    F26: {
        type: String,
        required: true
    },
    N19: {
        type: String,
        required: true
    },
    N20: {
        type: String,
        required: true
    },
    N21: {
        type: String,
        required: true
    },
    N22: {
        type: String,
        required: true
    },
    N23: {
        type: String,
        required: true
    },
    N24: {
        type: String,
        required: true
    },
    N25: {
        type: String,
        required: true
    },
    N26: {
        type: String,
        required: true
    },
    M19: {
        type: String,
        required: true
    },
    M20: {
        type: String,
        required: true
    },
    M21: {
        type: String,
        required: true
    },
    M22: {
        type: String,
        required: true
    },
    M23: {
        type: String,
        required: true
    },
    M24: {
        type: String,
        required: true
    },
    M25: {
        type: String,
        required: true
    },
    M26: {
        type: String,
        required: true
    },
    VT19: {
        type: String,
        required: true
    },
    VT20: {
        type: String,
        required: true
    },
    VT21: {
        type: String,
        required: true
    },
    VT22: {
        type: String,
        required: true
    },
    VT23: {
        type: String,
        required: true
    },
    VT24: {
        type: String,
        required: true
    },
    VT25: {
        type: String,
        required: true
    },
    VT26: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('Modulo_de_Despacho', asamDosModelSchema)