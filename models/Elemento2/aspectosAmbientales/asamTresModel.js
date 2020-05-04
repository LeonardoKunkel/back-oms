const mongoose = require('mongoose');

const asamTresModelSchema = new mongoose.Schema({
    F27: {
        type: String,
        required: true
    },
    F28: {
        type: String,
        required: true
    },
    F29: {
        type: String,
        required: true
    },
    N27: {
        type: String,
        required: true
    },
    N28: {
        type: String,
        required: true
    },
    N29: {
        type: String,
        required: true
    },
    M27: {
        type: String,
        required: true
    },
    M28: {
        type: String,
        required: true
    },
    M29: {
        type: String,
        required: true
    },
    VT27: {
        type: String,
        required: true
    },
    VT28: {
        type: String,
        required: true
    },
    VT29: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('Drenajes_y_Trampas', asamTresModelSchema)