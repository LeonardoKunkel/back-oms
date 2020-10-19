const mongoose = require('mongoose'),
      moment = require('moment');

const puntoDosAspectosGrafica = new mongoose.Schema({
    aspectosGrafica:{
        type:Number
    }
});

module.exports = mongoose.model("E2AspectosGrafica",puntoDosAspectosGrafica);