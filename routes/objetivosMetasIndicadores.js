const express = require('express'),
      ObjetosMetasIndicadores = require('../models/Elemento4/objetivosMetasIndicadoresModel'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();

router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    objetMetasIndicadores = {
        objetivo: body.objetivo,
        proceso: body.proceso,
        nombre: body.nombre,
        periodo: body.periodo,
        meta1: body.meta1,
        actividad1: body.actividad1,
        indicador1: body.indicador1,
        soporte1: body.soporte1,
        frecuencia1: body.frecuencia1,
        criterio1: body.criterio1,
        meta2: body.meta2,
        actividad2: body.actividad2,
        indicador2: body.indicador2,
        soporte2: body.soporte2,
        frecuencia2: body.frecuencia2,
        criterio2: body.criterio2,
        meta3: body.meta3,
        actividad3: body.actividad3,
        indicador3: body.indicador3,
        soporte3: body.soporte3,
        frecuencia3: body.frecuencia3,
        criterio3: body.criterio3,

    }

    ObjetosMetasIndicadores.create(objetMetasIndicadores, (err, objetoMetaIndicadorBD) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear objetivos',
                err
            })
        }

        res.status(200).json({
            ok: true,
            objetoMetaIndicadorBD
        })
    })
})

router.get('/', [verificarToken], (req,res) => {
    ObjetosMetasIndicadores.find().exec( (err, objetivoMI) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer el objetivo metas o indicadores',
                err
            })
        }

        res.status(200).json({
            ok: true,
            objetivoMI
        })
    } )
})


module.exports = router;