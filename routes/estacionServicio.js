const express = require('express'),
      estacionServicio= require('../models/estacionServicioModel'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();

      //Crear en la base de datos

      router.post('/create',[verificarToken],(req,res)=>{
          const body = req.body;
          console.log(body);
          let newDatos = {
            nombreEstacionServicio:body.nombreEstacionServicio,
            estado:body.estado,
            ciudad:body.ciudad,
            colonia:body.colonia,
            cp:body.cp,
            calleNumero:body.calleNumero,
            correoElectronico:body.correoElectronico,
            telefono:body.telefono,
            gerenteEstacion:body.gerenteEstacion,
            representanteTecnico:body.representanteTecnico,
            maximaAutoridad:body.maximaAutoridad,
          }
          estacionServicio.create(newDatos,(err,crearDatesEstacionServicio)=>{
              if(err){
                  res.status(400).json({
                      message:'Error al almacenar',
                      err
                  })
              }
              res.json({
                  ok:true,
                  crearDatesEstacionServicio
              })
          })
      })

      //Consultar los datos en la base de datos
    
      router.get('/',[verificarToken],(req,res) =>{
          estacionServicio.find().exec((err,findEstacion)=>{
              if(err){
                  res.status(400).json({
                      message:'No se pudo consultar la estacion',
                      err
                  })
              }
              res.status(200).json({
                  ok:true,
                  findEstacion
              })
          })
      })
      module.exports = router;