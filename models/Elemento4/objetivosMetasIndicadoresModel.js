const mongoose = require('mongoose'),
      moment = require('moment');

const ObjetivosMetasIndicadoresSchema = new mongoose.Schema({
    objetivo:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    proceso:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    nombre:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    periodo:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    meta1:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    actividad1:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    indicador1:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    soporte1:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    frecuencia1:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    criterio1:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    meta2:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    actividad2:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    indicador2:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    soporte2:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    frecuencia2:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    criterio2:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    meta3:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    actividad3:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    indicador3:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    soporte3:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    frecuencia3:{
      type : String,
      required : true,
      default : "falta Campo"
    },
    criterio3:{
      type : String,
      required : true,
      default : "falta Campo"
    },
});

module.exports = mongoose.model("Punto 4 Objetivos Metas Indicadores",ObjetivosMetasIndicadoresSchema)