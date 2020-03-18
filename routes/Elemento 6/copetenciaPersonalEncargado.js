const express = require('express'),
      copetenciaPersonalEncargado = require('../../models/Elemento6/copetenciaPersonalEncargadoModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      router = express.Router();
      
      router.post('/create',[verificarToken],(req,res)=>{
          const body = req.body;
          console.log(body);
          let newDatos  = {

            caracteristicasPersonales: body.caracteristicasPersonales,
            requerimientosFisicos: body.requerimientosFisicos,
            herramientasEquipos: body.herramientasEquipos,
            equipoProteccion: body.equipoProteccion,

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
      module.exports = router;