const mongoose = require ('mongoose');


const elementoUnoSchema = new mongoose.Schema({
    politica: {
        type: String
    }
})


module.exports = mongoose.model("Elemento uno", elementoUnoSchema);

