const mongoose = require('mongoose')

const ObjetivosMetasIndicadoresSchema = new mongoose.Schema({

  reduccionGeneracionResiduos:{
    type : String
  },
  reduccionConsumoAgua:{ 
    type:String,
  },
  reduccionConsumoEnergia : { 
    type:String,
  },
  cumplimientoProgramaMantenimiento : { 
    type:String,
  },
  mejorarActividadesSimulacros:{ 
    type:String,
  },
  incrementarCapacitaciones:{
    type:String,
  },
  mejorarServicioAtencionCliente:{ 
    type:String,
  },
  incrementarVentaAnualmente:{ 
    type:String,
  },
 
});

module.exports = mongoose.model("ObjetivosMetasIndicadores",ObjetivosMetasIndicadoresSchema)