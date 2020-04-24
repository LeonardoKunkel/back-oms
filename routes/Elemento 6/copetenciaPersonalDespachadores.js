const express = require('express'),
        copetenciaPersonalDespachadores = require('../../models/Elemento6/copetenciaPersonalDespachadoresModel'),
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

    copetenciaPersonalDespachadores.create(newDatos,(err,crearCopetenciaPersonalDespachadores)=>{
        if(err){
            res.status(400).json({
                message:'Error al crear la copetencian den los despachadores',
                err
            })
        }
        res.json({
            ok:true,
            crearCopetenciaPersonalDespachadores
        })
    })
    
})
 module.exports = router;