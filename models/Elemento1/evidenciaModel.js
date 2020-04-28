const mongoose = require('mongoose');

    const evidenciaElemento1Schema = new mongoose.Schema({
        evidencia: {
            type: String
        }
    })

    module.exports = mongoose.model("Evidencia elemento uno", evidenciaElemento1Schema);