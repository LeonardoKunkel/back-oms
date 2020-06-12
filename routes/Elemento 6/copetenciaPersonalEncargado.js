const express = require('express'),
      copetenciaPersonalEncargado = require('../../models/Elemento6/copetenciaPersonalEncargadoModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      router = express.Router();
      
      router.post('/create',[verificarToken],(req,res)=>{
          const body = req.body;
          console.log(body);
          let newDatos  = {
            requerimientosFisicos: body.requerimientosFisicos,
            herramientasEquipos: body.herramientasEquipos,
            equipoProteccion: body.equipoProteccion,
            nivelAcademico: body.nivelAcademico,
            personalCargo: body.personalCargo

          }

          copetenciaPersonalEncargado.create(newDatos,(err,crearCopetenciaPersonalEncargado)=>{
              if(err){
                  res.status(400).json({
                      message:'Error al crear',
                      err
                  })
              }
              res.json({
                  ok:true,
                  crearCopetenciaPersonalEncargado
              })
          })
      })
    
      router.get('/',(req,res) =>{
          copetenciaPersonalEncargado.find((err,newRepresentante)=>{
             if (err) {
                 res.status(400).json({
                    ok:true,
                    message:'No se pudo'
                 })
             }
             res.status(200).json({
                 newRepresentante
             })
          })
      })
      module.exports = router;