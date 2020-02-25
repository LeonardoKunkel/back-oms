const express = require('express'),
      politicas = require('../../models/Elemento 1/elementoUnoModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      router = express.Router();

router.post('/create',[verificarToken],(req,res) => {
    const body = req.body;
    console.log(body);
    
    politicaEscogida = {
        politica: body.politica
    }

    politicas.create(politicaEscogida,(err,politicaEscogidaBD) => {
        if(err) {
            res.status(400).json({
                message: 'Error al crear la politica',
                err
            })
        }
        res.json({
            ok: true,
            politicaEscogidaBD
        })
    })

    router.get('/',[verificarToken],(req,res) => {
        politicaEscogida.find().
        exec((err,politicaEscogida) => {
            if(err) {
                res.status(400).json({
                    message: 'Error al traer la politica',
                    err
                })
            }
            res.json({
                ok: true,
                politicaEscogida
            })
        })
    })
});

module.exports = router;