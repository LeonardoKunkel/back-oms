const express = require('express'),
                {verificarToken} = require('../server/middlewares/auth'),
                Puntosiete = require('../models/puntosieteModel')
                router = express.Router();

router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let newPuntoSiete = {
        curso:body.curso,
        difusion:body.difusion,
        interno:body.interno,
        externo:body.externo,
        nombreCurso:body.nombreCurso,
        lugar:body.lugar,
        facilitador:body.facilitador,
        empresa:body.empresa,
        queja:body.queja,
        sugerencia:body.sugerencia,
        condicionRiesgo:body.condicionRiesgo,
        solicitudInformacion:body.solicitudInformacion,
        inpactoAmbiente:body.inpactoAmbiente,
        descripcionMotivo:body.descripcionMotivo,
        numeroQuejas:body.numeroQuejas,
        queja:body.queja,
        sugerencia1:body.sugerencia1,
        otro:body.otro,
        descripcion:body.descripcion,
        contacto:body.contacto,
        alta:body.alta,
        media:body.media,
        baja:body.baja,
        fechaComienzo:body.fechaComienzo,
        fechaFinal:body.fechaFinal
    }

    Puntosiete.create(newPuntoSiete, (err,newPuntoSiete) => {
        if (err) {
            res.json({
                message: 'Error al guardar Punto Dos',
                err
            })
        }
        newPuntoSiete.save();
        res.json({
            ok:true,
            newPuntoDos
        })
    })
})

router.get('/:id', [verificarToken], (req, res) => {
    const id = req.params.id;
    Puntodos.findById(id)
            .exec((err, puntosieteDB) => {
                if (err) {
                    return res.status(500).json({
                        message: 'no se pudo cargar el punto dos',
                        err
                    })
                }
                res.json({
                    ok:true,
                    puntosieteDB
                })
            })
})