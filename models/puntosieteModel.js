const mongoose = require('mongoose')
, moment =  require('moment');

const puntosieteSchema = new mongoose.Schema({

    curso:{
        type:Boolean,
        require:true,
        default:false
    },
    difusion:{
        type:Boolean,
        require:true,
        default:false
    },
    interno:{
        type:Boolean,
        require:true,
        default:false

    },
    interno:{
        type:Boolean,
        require:true,
        default:false

    },
    externo:{
        type:Boolean,
        require:true,
        default:false

    },
        //Empiezan Strings
    nombreCurso:{
        type:String,
        require:true
    },
    lugar:{
        type:String,
        require:true
    },
    facilitador:{
        type:String,
        require:true
    },
    empresa:{
        type:String,
        require:true
    },
    //Empieza segundo formulario
    queja:{
        type:Boolean,
        require:true,
        default:false
    },
    sugerencia:{
        type:Boolean,
        require:true,
        default:false        
    },
    condicionRiesgo:{
        type:Boolean,
        require:true,
        default:false

    },
    solicitudInformacion:{
        type:Boolean,
        require:true,
        default:false

    },
    inpactoAmbiente:{
        type:Boolean,
        require:true,
        default:false

    },
    descripcionMotivo:{
        type:Boolean,
        require:true,
        default:false
    },
    //Empieza tercer formulario
    numeroQuejas:{
        type:String,
        require:true
        ,default:false
    },
    queja:{
        type:Boolean,
        require:true
        ,default:false
    },
    sugerencia1:{
        type:Boolean,
        require:true
        ,default:false
    },
    otro:{
        type:Boolean,
        require:true
        ,default:false
    },
    descripcion:{
        type:String,
        require:true
    },
    contacto:{
        type:String,
        require:true
    },
    alta:{
        type:Boolean,
        require:true
        ,default:false
    },
    media:{
        type:Boolean,
        require:true
        ,default:false
    },
    baja:{
        type:Boolean,
        require:true
        ,default:false
    },
    fechaComienzo:{
        type:String,
        require:true
    },
    fechaFinal:{
        type:String,
        require:true
    }

    });

