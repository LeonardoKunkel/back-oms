const express = require('express'),
      copetenciaPersonalJefe = require('../../models/Elemento6/copetenciaPersonalJefeMode'),
      {verificarToken} = require('../../server/middlewares/auth'),
      router = express.Router();

      //Crear en la base de datos
      router.post('/create',[verificarToken],(req,res)=>{
          const body = req.body;
          console.log(body);
          let newDatos = {

            caracteristicasPersonales: body.caracteristicasPersonales,
            requerimientosFisicos: body.requerimientosFisicos,
            herramientasEquipos: body.herramientasEquipos,
            equipoProteccion: body.equipoProteccion,

          }
          
          copetenciaPersonalJefe.create(newDatos,(err,crearCopetenciaPersonalJefe)=>{
              if(err){
                  res.status(400).json({
                      message:'Error al crear en ñla base de datos',
                      err
                  })
              }
              res.json({
                  ok:true,
                  crearCopetenciaPersonalJefe
              })
          })
      })

      module.exports = router;