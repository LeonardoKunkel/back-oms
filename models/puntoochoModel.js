const mongoose = require('mongoose'),
      moment = require('moment');


const puntoochoSchema = new mongoose.Schema({
    politica: {
        type: Boolean,
        required: true,
        default: false
    },
    identificacioPeligros:{
        type: Boolean,
        required: true,
        default: false
    }
})