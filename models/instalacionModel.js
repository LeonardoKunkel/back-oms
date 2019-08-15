const   mongoose = require('mongoose');

const instalacionModelSchema = new mongoose.Schema({
    sasisopa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sasisopa'
    },
});

module.exports = mongoose.model('Instalacion', instalacionModelSchema);