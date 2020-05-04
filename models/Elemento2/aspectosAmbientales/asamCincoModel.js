const mongoose = require('mongoose');

const asamCincoModelSchema = new mongoose.Schema({
    F34: {
        type: String,
        required: true
    },
    F35: {
        type: String,
        required: true
    },
    F36: {
        type: String,
        required: true
    },
    F37: {
        type: String,
        required: true
    },
    N34: {
        type: String,
        required: true
    },
    N35: {
        type: String,
        required: true
    },
    N36: {
        type: String,
        required: true
    },
    N37: {
        type: String,
        required: true
    },
    M34: {
        type: String,
        required: true
    },
    M35: {
        type: String,
        required: true
    },
    M36: {
        type: String,
        required: true
    },
    M37: {
        type: String,
        required: true
    },
    VT34: {
        type: String,
        required: true
    },
    VT35: {
        type: String,
        required: true
    },
    VT36: {
        type: String,
        required: true
    },
    VT37: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('Cuarto_de_Control_Electrico', asamCincoModelSchema)