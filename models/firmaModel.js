const mongoose = require('mongoose'),
      moment = require('moment');

const firmaEstacion = new mongoose.Schema({
    firma:{
        type: String
    }
});
module.exports = mongoose.model("FirmaElectronica",firmaEstacion);