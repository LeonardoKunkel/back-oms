const express = require('express'),
        anexoSeguridadElemento12 = require('../../models/Elemento12/anexoSeguridadModel'),
        {verificarToken} = require('../../server/middlewares/auth'),
        router = express.Router();

//Crear en la base de datos

router.post('/create',[verificarToken],(req,res)=>{
    const body = req.body;
    console.log(body);
    let newDatos = {

        regla1: body.regla1,
        regla2: body.regla2,
        regla3: body.regla3,
        regla4: body.regla4,
        regla5: body.regla5,
        regla6: body.regla6,
        regla7: body.regla7,
        regla8: body.regla8,
        regla9: body.regla9,

    }

    anexoSeguridadElemento12.create(newDatos,(err,crearAnexoSeguridad)=>{
        if(err){
            res.status(400).json({
                message:'Error al crear la copetencian den los despachadores',
                err
            })
        }
        res.json({
            ok:true,
            crearAnexoSeguridad
        })
    })
    
})
 module.exports = router;