const mongoose = require('mongoose')

const ObjetivosMetasIndicadoresSchema = new mongoose.Schema({

  reduccionGeneracionResiduos:{
    type : Boolean
  },
  reduccionConsumoAgua:{ 
    type : Boolean
  },
  reduccionConsumoEnergia : { 
    type : Boolean
  },
  cumplimientoProgramaMantenimiento : { 
    type : Boolean
  },
  incrementarCapacitaciones:{
    type : Boolean
  },
  incrementarVentaAnualmente:{
    type : Boolean
  },
 
});

module.exports = mongoose.model("ObjetivosMetasIndicadores",ObjetivosMetasIndicadoresSchema)