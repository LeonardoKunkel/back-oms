const express = require('express'),
      //ComunicacionParticipacionConsulta = require('../models/Elemento7/comunicacionParticipacionConsultaModels'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();



router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let comunicacion = {
        curso: body.curso,
        difusion: body.difusion, 
        interno: body.interno,
        externo: body.externo,
        nombreCurso: body.nombreCurso,
        lugar: body.lugar,
        facilitador: body.facilitador,
        empresa: body.empresa,
    }

    ComunicacionParticipacionConsulta.create(comunicacion, (err,comunicacionBD) => {
        if (err) {
            res.satus(400).json({
                message: 'error al crear comunicacion',
                err
            })
        }

        res.satus(200).json({
            ok: true,
            comunicacionBD
        })
    })
    
})


router.get('/', [verificarToken], (req,res) => {
    ComunicacionParticipacionConsulta.find().exec((err, comunicacion) => {
        if (err) {
            res.satus(400).json({
                message: 'error al traer la comunicacion',
                err
            })
        }

        res.satus(200).json({
            ok: true,
            cocomunicacion
        })
    })
})


module.exports = router;