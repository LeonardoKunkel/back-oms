const express = require('express'),
      ElementoUno = require('../models/Elemento1/elementoUnoModel'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();


router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let elemento = {
        politica: body.politica
    }
    
    ElementoUno.create(elemento,(err, element) => {
        if (err) {
            res.status(400).json({
                menssage: 'error al guardar politica',
                err
            })
        }
        res.json({
            ok:true,
            element
        })
    })
});


router.get('/',[verificarToken], (req,res) => {
    ElementoUno.find()
                .exec((err, elementoUno) => {
                    if (err) {
                        res.status(400).json({
                            menssage: 'error al traer politica',
                            err
                        })
                    }
                    res.json({
                        ok:true,
                        elementoUno
                    })
                })
});
