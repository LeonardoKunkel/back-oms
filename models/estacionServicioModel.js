const mongoose = require('mongoose'),
      moment = require('moment');

const estacionServicioSchema = new mongoose.Schema({
    nombreEstacionServicio:{
        type: String
    },
    estado:{
        type: String
    },
    ciudad:{
        type: String
    },
    colonia:{
        type: String
    },
    cp:{
        type: String
    },
    calleNumero:{
        type: String
    },
    correoElectronico:{
        type: String
    },
    telefono:{
        type: String
    },
    gerenteEstacion:{
        type: String
    },
    representanteTecnico:{
        type: String
    },
    maximaAutoridad:{
        type: String
    }
    
});
module.exports = mongoose.model("Datos generales de la estación de servicio",estacionServicioSchema);