const mongoose = require('mongoose'),
      moment = require('moment');

const aspectosAmbientalesSchema = new mongoose.Schema({
  aspectosGrafica:{
      type:Number
  }
});

module.exports = mongoose.model("E2RiesgosGrafica",aspectosAmbientalesSchema);
