const express = require('express'),
      DeteccionNecesidades = require('../models/Elemento6/deteccionNecesidadesModel'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();



router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let deteccionNevesidades = {
        R1:body.R1,
        R2:body.R2,
        R3:body.R3,
        R4:body.R4,
        R5:body.R5,
        R6:body.R6,
        R7:body.R7,
        R8:body.R8,
        R9:body.R9,
        R10:body.R10
    }


    DeteccionNecesidades.create(deteccionNevesidades, (err,deteccionBD) => {
        if (err) {
            res.satus(400).json({
                message: 'error al crear deteccion de necesidades',
                err
            })
        }

        res.satus(200).json({
            ok: true,
            deteccionBD
        })
    })
})



router.get('/', [verificarToken], (req,res) => {
    DeteccionNecesidades.find().exec((err,deteccionN) => {
        if (err) {
            res.satus(400).json({
                message: 'error al traer la deteccion de necesidades'
            })
        }

        res.satus(200).json({
            ok: true,
            deteccionN
        })
    })
})


module.exports = router;