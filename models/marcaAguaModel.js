const mongoose = require('mongoose'),
      moment = require('moment');

const estacionIcons = new mongoose.Schema({
    marcaAgua:{
        type: String
    }
});
module.exports = mongoose.model("Marca Agua",estacionIcons);