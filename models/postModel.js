const mongoose = require('mongoose'),
      moment = require('moment');

const puntoPostSchema = new mongoose.Schema({
    mensaje:{
        type: String
    },
    coordenadas:{
        type:String
    }

})
module.exports = mongoose.model("Psts ",puntoPostSchema)



