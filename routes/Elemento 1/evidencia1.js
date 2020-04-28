const express = require('express'),
    evidencias = require('../../models/Elemento1/evidenciaModel'),
    {verificarToken} = require('../../server/middlewares/auth'),
    router = express.Router();

    router.post('/create',[verificarToken],(req,res)=>{
        const body = req.body;
        console.log(body);
        let newEvidencia = {
            evidencia: body.evidencia
        }

        evidencias.create(newEvidencia,(err, crearEvidencia)=>{
            if(err){
                res.status(400).json({
                    message:'Error a subir evidencia',
                    err
                })
            }
            res.json({
                ok:true,
                crearEvidencia
            })
        })
    })

        module.exports = router;