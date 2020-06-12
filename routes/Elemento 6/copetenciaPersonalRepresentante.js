const express = require('express'),
      copetenciaPersonalRepresentante = require('../../models/Elemento6/copetenciaPersonalRepresentanteModel'),
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

        copetenciaPersonalRepresentante.create(newDatos,(err,  crearCopetenciaPersonalRepresentante)=>{
            if(err){
                res.status(400).json({
                    message:'Error al crear la carta designacion',
                    err
                })
            }
            res.json({
                ok:true,
                crearCopetenciaPersonalRepresentante
            })
        })
      })
    
      router.get('/',(req,res) =>{
          copetenciaPersonalRepresentante.find((err,newRepresentante)=>{
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