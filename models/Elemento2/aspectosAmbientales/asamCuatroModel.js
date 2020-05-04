const mongoose = require('mongoose');

const asamCuatroModelSchema = new mongoose.Schema({
    F30: {
        type: String,
        required: true
    },
    F31: {
        type: String,
        required: true
    },
    F32: {
        type: String,
        required: true
    },
    F33: {
        type: String,
        required: true
    },
    N30: {
        type: String,
        required: true
    },
    N31: {
        type: String,
        required: true
    },
    N32: {
        type: String,
        required: true
    },
    N33: {
        type: String,
        required: true
    },
    M30: {
        type: String,
        required: true
    },
    M31: {
        type: String,
        required: true
    },
    M32: {
        type: String,
        required: true
    },
    M33: {
        type: String,
        required: true
    },
    VT30: {
        type: String,
        required: true
    },
    VT31: {
        type: String,
        required: true
    },
    VT32: {
        type: String,
        required: true
    },
    VT33: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('Oficinas_y_Banos', asamCuatroModelSchema)