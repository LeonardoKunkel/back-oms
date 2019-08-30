const express = require('express'),
                {verificarToken} = require('../server/middlewares/auth'),
                Puntoseis = require('../models/puntoseisModel'),
                router = express.Router();


router.post('/create',[verificarToken], (req, res) => {
    const body = req.body;
    console.log(body);

    let newPuntoSeis = {
        jefeInmediato: body.jefeInmediato,
        caracteristicas: body.caracteristicas,
        requerimientosFisicos: body.requerimientosFisicos,
        conocimientosEspecificos: body.requerimientosFisicos,
        destrezasTecnicas: body.destrezasTecnicas,
        nivelAcademico: body.nivelAcademico,
        objetivoPuesto: body.objetivoPuesto,
        funcionesEspecificas: body.funcionesEspecificas,
        personalCargo: body.personalCargo,
        herramientas: body.herramientas,
        equiposProcctecion: body.equiposProcctecion,
        nuevoIngreso: body.nuevoIngreso,
        promocion: body.promocion,
        reentrenamiento: body.reentrenamiento,
        actulizacionTrinual: body.actulizacionTrinual,
        inconformidadAuditoria: body.inconformidadAuditoria,
        bajoDesempeño: body.bajoDesempeño,
        recomendacionIcr: body.recomendacionIcr,
        NoObjetivos: body.NoObjetivos,
        situacionActual: body.situacionActual,
        situacionDeseada: body.situacionDeseada,
        objetivosNecesidad: body.objetivosNecesidad,
        temasCapacitacion: body.temasCapacitacion
    }

    Puntoseis.create(newPuntoSeis,(err, newPuntoSeis) => {
        if (err) {
            res.json({
                message: 'no se pudo guardar el punto seis',
                err
            })
        }
        res.json({
            ok: true,
            newPuntoSeis
        })
    })
})

router.get('/:id', [verificarToken], (req, res) => {
    const id = req.params.id;
    Puntoseis.findById(id)
            .exec((err, puntoseisDB) => {
                if (err) {
                    return res.status(500).json({
                        message: 'no se pudo cargar el punto cinco',
                        err
                    })
                }
                res.json({
                    ok:true,
                    puntoseisDB
                })
            })
})