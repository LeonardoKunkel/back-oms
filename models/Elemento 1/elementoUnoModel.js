const mongoose = require('mongoose');


const elementoUnoSchema = new mongoose.Schema({
    politica: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Elemneto uno", elementoUnoSchema);