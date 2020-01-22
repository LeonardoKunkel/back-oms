const mongoose = require('mongoose');


const puntoDosSchema = new mongoose.Schema({
    evaluacionAspectosAmbientales: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'evaluacionAspectos'
    },
    evaluacionRiesgos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'evaluacionRiesgos'
    },
    listadoPeligros: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'listadoPeligros'
    },
    resultadoRiesgos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'resultadoriesgos'
    },
    evidenciaDos:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'evidencia2'
    }
    
})

module.exports = mongoose.model('puntoDos', puntoDosSchema);