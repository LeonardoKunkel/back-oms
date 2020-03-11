const express = require('express'),
      politicas = require('../../models/Elemento 1/elementoUnoModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      router = express.Router();

router.post('/create',[verificarToken],(req,res) => {
    const body = req.body;
    console.log(body);
    
    newPolitica = {
        politica: body.politica
    }

    politicas.create(newPolitica,(err,crearPolitica) => {
        if(err) {
            res.status(400).json({
                message: 'Error al crear la politica',
                err
            })
        }
        res.json({
            ok: true,
            crearPolitica
        })
    })

    router.get('/',[verificarToken],(req,res) => {
        politicas.find().exec((err,findPolitica) => {
            if(err) {
                res.status(400).json({
                    message: 'Error al traer la politica',
                    err
                })
            }
            res.json({
                ok: true,
                findPolitica
            })
        })
    })
});

module.exports = router;