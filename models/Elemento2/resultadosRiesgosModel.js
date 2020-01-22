const mongoose = require('mongoose'),
      moment = require('moment');

const puntoDosResultadosRiesgosSchema = new mongoose.Schema({

    
  P1C1:{
    type:String,
    required:true,
    default:"falta Campo"  
  },
  P2C1:{
    type:String,
    required:true,
    default:"falta Campo"  
  },
  P3C1:{
    type:String,
    required:true,
    default:"falta Campo"  
  },
  P4C1:{
    type:String,
    required:true,
    default:"falta Campo"  
  },
  P5C1:{
   type:Boolean,
   required:true,
   default:"falta Campo"   
  },
  P6C1:{
   type:Boolean,
   required:true,
   default:"falta Campo"   
  },
  P7C1:{
   type:Boolean,
   required:true,
   default:"falta Campo"   
  },
  P1C2:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P2C2:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P3C2:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P4C2:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P5C2:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P6C2:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P7C2:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P1C3:{
    type:String,
    required:true,
    default:"falta Campo"
  },
  P2C3:{
    type:String,
    required:true,
    default:"falta Campo"
  },
  P3C3:{
    type:String,
    required:true,
    default:"falta Campo"
  },
  P4C3:{
    type:String,
    required:true,
    default:"falta Campo"
  },
  P5C3:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P6C3:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P7C3:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P1C4:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P2C4:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P3C4:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P4C4:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P5C4:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P6C4:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P7C4:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P1C5:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P2C5:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P3C5:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P4C5:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P5C5:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P6C5:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P7C5:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P1C6:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P2C6:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P3C6:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P4C6:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P5C6:{
   type:Boolean,
   required:true,
   default:"falta Campo"      
  },
  P6C6:{
   type:Boolean,
   required:true,
   default:"falta Campo"      
  },
  P7C6:{
   type:Boolean,
   required:true,
   default:"falta Campo"      
  },
  P1C7:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P2C7:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P3C7:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P4C7:{
    type:String,
    required:true,
    default:"falta Campo"   
  },
  P5C7:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P6C7:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
  P7C7:{
   type:Boolean,
   required:true,
   default:"falta Campo"
  },
}) 

module.exports = mongoose.model("Punto Dos Resultados Riesgos",puntoDosResultadosRiesgosSchema)