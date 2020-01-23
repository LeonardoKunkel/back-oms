const mongoose = require('mongoose')

const punto5MatrizResponsabilidades = new mongoose.Schema({
    puesto1: {
        type: String,
        required: true,
        default: ''
    },
    puesto2: {
        type: String,
        required: true,
        default: ''
    },

    puesto3: {
        type: String,
        default:''
    }
}); 

module.exports = mongoose.model('matrizResponsabilidades', punto5MatrizResponsabilidades);