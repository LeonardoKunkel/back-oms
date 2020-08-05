const mongoose = require('mongoose'),
      moment = require('moment');

const FirmaRepresentante = new mongoose.Schema({
    firma:{
        type: String
    }
});
module.exports = mongoose.model("FirmaRepresentante",FirmaRepresentante);