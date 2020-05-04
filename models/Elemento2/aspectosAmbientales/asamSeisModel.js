const mongoose = require('mongoose');

const asamSeisModelSchema = new mongoose.Schema({
    F38: {
        type: String,
        required: true
    },
    F39: {
        type: String,
        required: true
    },
    N38: {
        type: String,
        required: true
    },
    N39: {
        type: String,
        required: true
    },
    M38: {
        type: String,
        required: true
    },
    M39: {
        type: String,
        required: true
    },
    VT38: {
        type: String,
        required: true
    },
    VT39: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('Cuarto_de_Maquinas', asamSeisModelSchema)