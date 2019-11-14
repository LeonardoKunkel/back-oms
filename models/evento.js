const mongose = require('mongoose'),
      moment = require('moment');

const eventoModelSchema = new mongose.Schema({
    title: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
})

module.exports = mongose.model("Evento", eventoModelSchema);