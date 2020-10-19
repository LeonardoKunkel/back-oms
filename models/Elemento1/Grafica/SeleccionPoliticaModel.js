const mongoose = require('mongoose'),
      moment = require('moment');

const selecionPoliticaGrafica = new mongoose.Schema({
    selecionPolitica:{
        type:Number
    }
});

module.exports = mongoose.model("SeleccionPoliticaGrafica",selecionPoliticaGrafica);