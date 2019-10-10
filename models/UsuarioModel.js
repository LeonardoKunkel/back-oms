const   mongoose = require('mongoose');

const usuarioModelSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'El email de  es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    role: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        default: 'EMPLEADO_ROLE'
    },
    estado: {
        type: Boolean,
        default: true
    },
    instalaciones: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Instalacion'
        }
    ],
    creado: {
        type: Date,
        default: Date.now()
    },
    eventos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Evento'
        }
    ]
});

usuarioModelSchema.methods.toJSON = function (){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

module.exports = mongoose.model('Usuario', usuarioModelSchema);