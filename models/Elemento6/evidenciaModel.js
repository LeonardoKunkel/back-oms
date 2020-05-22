const mongose = require('mongoose');

const evidenciaModelSchema = new mongose.Schema({
    title:{type: String},
    description:{type: String},
    filename:{type: String},
    path:{type: String},
    originalname:{type: String},
    mimetype:{type: String},
    size:{type: Number},
    created_at:{type: Date, default: Date.now()}
})

module.exports = mongose.model('Evidencia Elemento Seis', evidenciaModelSchema);