const express = require('express'),
        acordeonCreate = require('../../models/Elemento 13/acordeonModel'),
        {verificarToken} = require('../../server/middlewares/auth'),
        router = express.Router();

//Crear en la base de datos

router.post('/create',[verificarToken],(req,res)=>{
    const body = req.body;
    console.log(body);

    let newDatos = {
        mes: body.mes,
        aviso: body.aviso,
        fecha: body.fecha,
        descripcionEmergencia: body.descripcionEmergencia,
        claseSimulacro: body.claseSimulacro
    }

        acordeonCreate.create(newDatos,(err,crearAcordeon)=>{

            if(err){
                res.status(400).json({
                    message:'Error al crear la copetencian den los despachadores',
                    err
                })
            }
        })
    acordeonCreate.create(newDatos,(err,crearAcordeon)=>{
        if(err){
            res.status(400).json({
                message:'Error al crear la copetencian den los despachadores',
                err
            })
        }
        res.json({
            ok:true,
            crearAcordeon
        })
     })
    
})
    module.exports =router;