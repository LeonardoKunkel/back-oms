const express = require('express'),
                {verificarToken} = require('../server/middlewares/auth'),
                Puntocinco = require('../models/puntocincoModel'),
                router = express.Router();

router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);
    
    let newPuntoCinco = {
        nombreEncargado: body.nombreEncargado,
        correo: body.correo,
        telefono: body.telefono,
        razonSocial: body.razonSocial,
        direccion: body.direccion,
        cp: body.cp,
        estado: body.estado,
        colonia: body.colonia
    }

    Puntocinco.create(newPuntoCinco, (err, puntoCinco) => {
        if (err) {
            res.json({
                message: 'Error al crear punto cinco',
                err
            })
        }
        res.json({
            ok:true,
            puntoCinco
        })
    })

})

router.get('/:id', [verificarToken], (req, res) => {
    const id = req.params.id;
    Puntocinco.findById(id)
            .exec((err, puntocincoDB) => {
                if (err) {
                    return res.status(500).json({
                        message: 'no se pudo cargar el punto cinco',
                        err
                    })
                }
                res.json({
                    ok:true,
                    puntocincoDB
                })
            })
})