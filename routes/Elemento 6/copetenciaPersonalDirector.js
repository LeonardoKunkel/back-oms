const express = require('express'),
      copetenciaPersonalDirector = require('../../models/Elemento6/copetenciaPersonalDirectorModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      router = express.Router();

      //Crear en la base de datos

    router.post('/create',[verificarToken],(req,res)=>{
        const body = req.body;
        console.log(body)
        let newDatos = {
            requerimientosFisicos: body.requerimientosFisicos,
            herramientasEquipos: body.herramientasEquipos,
            equipoProteccion: body.equipoProteccion,
            nivelAcademico: body.nivelAcademico,
            personalCargo: body.personalCargo
        }

        copetenciaPersonalDirector.create(newDatos,(err,crearCopetenciaPersonalDirector)=>{
            if(err){
                res.status(400).json({
                    message:'Error al crear la carta designacion',
                    err
                })
            }
            res.json({
                ok:true,
                crearCopetenciaPersonalDirector
            })
        })
    })
    
     router.get('/',(req,res) =>{
         copetenciaPersonalDirector.find((err,newDirector)=>{
            if (err) {
                res.status(400).json({
                    ok:true,
                    message:'No se pudo'
                })
            }
            res.status(200).json({
                newDirector
            })
         })
     })
    module.exports = router;