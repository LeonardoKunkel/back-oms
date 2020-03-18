const express = require('express'),
      copetenciaPersonalContratista = require('../../models/Elemento6/copetenciaPersonalContratistaModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      router = express.Router();

      //Crear en la base de datos

    router.post('/create',[verificarToken],(req,res)=>{
        const body = req.body;
        console.log(body)
        let newDatos = {

            caracteristicasPersonales: body.caracteristicasPersonales,
            requerimientosFisicos: body.requerimientosFisicos,
            herramientasEquipos: body.herramientasEquipos,
            equipoProteccion: body.equipoProteccion,

        }

        copetenciaPersonalContratista.create(newDatos,(err,crearCopetenciaPersonalContratista)=>{
            if(err){
                res.status(400).json({
                    message:'Error al crear la carta designacion',
                    err
                })
            }
            res.json({
                ok:true,
                crearCopetenciaPersonalContratista
            })
        })
    })
    module.exports = router;