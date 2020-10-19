const mongoose = require('mongoose');

const element1DocumentSchema = new mongoose.Schema({
    title: {type:String},
    description: {type: String},
    filename: {type: String},
    path:{type: String},
    originalname:{type: String},
    mimetype:{type: String},
    size:{type: Number},
    created_at:{type: Date, default: Date.now()}
});

module.exports = mongoose.model('EvidenceElemnt1Document', element1DocumentSchema);