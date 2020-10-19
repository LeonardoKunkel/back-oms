const mongoose = require('mongoose'),
      moment = require('moment');

const riesgosGraficaSchema = new mongoose.Schema({
    riesgosGrafica:{
        type:Number
    }
});

module.exports = mongoose.model("E2analisisGrafica",riesgosGraficaSchema);