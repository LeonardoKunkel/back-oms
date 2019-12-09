const mongoose = require('mongoose'),
      moment = require('moment');

const Punto4ObjetivosMetasIndicadoresSchema = new mongoose.Schema({
    objetivo:{
      type : String,
      required : true,
      default : false
    },
    proceso:{
      type : String,
      required : true,
      default : false
    },
    nombre:{
      type : String,
      required : true,
      default : false
    },
    periodo:{
      type : String,
      required : true,
      default : false
    },
    meta1:{
      type : String,
      required : true,
      default : false
    },
    actividad1:{
      type : String,
      required : true,
      default : false
    },
    indicador1:{
      type : String,
      required : true,
      default : false
    },
    soporte1:{
      type : String,
      required : true,
      default : false
    },
    frecuencia1:{
      type : String,
      required : true,
      default : false
    },
    criterio1:{
      type : String,
      required : true,
      default : false
    },
    meta2:{
      type : String,
      required : true,
      default : false
    },
    actividad2:{
      type : String,
      required : true,
      default : false
    },
    indicador2:{
      type : String,
      required : true,
      default : false
    },
    soporte2:{
      type : String,
      required : true,
      default : false
    },
    frecuencia2:{
      type : String,
      required : true,
      default : false
    },
    criterio2:{
      type : String,
      required : true,
      default : false
    },
    meta3:{
      type : String,
      required : true,
      default : false
    },
    actividad3:{
      type : String,
      required : true,
      default : false
    },
    indicador3:{
      type : String,
      required : true,
      default : false
    },
    soporte3:{
      type : String,
      required : true,
      default : false
    },
    frecuencia3:{
      type : String,
      required : true,
      default : false
    },
    criterio3:{
      type : String,
      required : true,
      default : false
    },
});

module.exports = mongoose.model("Punto 4 Objetivos Metas Indicadores",Punto4ObjetivosMetasIndicadoresSchema)