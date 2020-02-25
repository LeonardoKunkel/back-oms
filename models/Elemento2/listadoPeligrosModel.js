const mongoose = require('mongoose'),
      moment = require('moment');

const puntoDosListadoPeligrosSchema = new mongoose.Schema({
    
    C1P1:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C1P2:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C1P3:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C1P4:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C2P1:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C2P2:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C2P3:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C2P4:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C3P1:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C3P2:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C3P3:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C3P4:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C4P1:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C4P2:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C4P3:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C4P4:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C5P1:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C5P2:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C5P3:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C5P4:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C6P1:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C6P2:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C6P3:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C6P4:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C7P1:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C7P2:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C7P3:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C7P4:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C8P1:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C8P2:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C8P3:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C8P4:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C9P1:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C9P2:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C9P3:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C9P4:{
     type:String,
     required:true,
     default:"falta Campo"
    },
    C10P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C10P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C10P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C10P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C11P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C11P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C11P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C11P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C12P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C12P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C12P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C12P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C13P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C13P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C13P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C13P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C14P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C14P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C14P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C14P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C15P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C15P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C15P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C15P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C16P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C16P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C16P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C16P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C17P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C17P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C17P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C17P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C18P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C18P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C18P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C18P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C19P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C19P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C19P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C19P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C20P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C20P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C20P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C20P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C21P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C21P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C21P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C21P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C22P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C22P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C22P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C22P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C23P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C23P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C23P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C23P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C24P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C24P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C24P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C24P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C25P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C25P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C25P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C25P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C26P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C26P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C26P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C26P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C27P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C27P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C27P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C27P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C28P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C28P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C28P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C28P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C29P1:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C29P2:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C29P3:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
    C29P4:{
     type:String,
     required:true,
     default:"falta Campo"   
    },
})
module.exports = mongoose.model('Punto Dos Listado Peligros',puntoDosListadoPeligrosSchema);
