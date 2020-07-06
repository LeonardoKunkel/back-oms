const mongoose = require('mongoose'),
      moment = require('moment');

const estacionIcons = new mongoose.Schema({
    imagen:{
        type: String
    }
});
module.exports = mongoose.model("iconos Estacion",estacionIcons);