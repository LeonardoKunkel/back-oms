const express = require('express'),
      ResultadosRiesgos = require('../models/Elemento2/resultadosRiesgosModel'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();

router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let resultados = {
        P1C1:body.P1C1,
        P2C1:body.P2C1,
        P3C1:body.P3C1,
        P4C1:body.P4C1,
        P5C1:body.P5C1,
        P6C1:body.P6C1,
        P7C1:body.P7C1,
        P1C2:body.P1C2,
        P2C2:body.P2C2,
        P3C2:body.P3C2,
        P4C2:body.P4C2,
        P5C2:body.P5C2,
        P6C2:body.P6C2,
        P7C2:body.P7C2,
        P1C3:body.P1C3,
        P2C3:body.P2C3,
        P3C3:body.P3C3,
        P4C3:body.P4C3,
        P5C3:body.P5C3,
        P6C3:body.P6C3,
        P7C3:body.P7C3,
        P1C4:body.P1C4,
        P2C4:body.P2C4,
        P3C4:body.P3C4,
        P4C4:body.P4C4,
        P5C4:body.P5C4,
        P6C4:body.P6C4,
        P7C4:body.P7C4,
        P1C5:body.P1C5,
        P2C5:body.P2C5,
        P3C5:body.P3C5,
        P4C5:body.P4C5,
        P5C5:body.P5C5,
        P6C5:body.P6C5,
        P7C5:body.P7C5,
        P1C6:body.P1C6,
        P2C6:body.P2C6,
        P3C6:body.P3C6,
        P4C6:body.P4C6,
        P5C6:body.P5C6,
        P6C6:body.P6C6,
        P7C6:body.P7C6,
        P1C7:body.P1C7,
        P2C7:body.P2C7,
        P3C7:body.P3C7,
        P4C7:body.P4C7,
        P5C7:body.P5C7,
        P6C7:body.P6C7,
        P7C7:body.P7C7,
    }

    ResultadosRiesgos.create(resultados, (err, resultadosBD) => {
        if (err) {
            res.status(400).json({
                message: 'no se pudo crear resultados de Riesgo',
                err
            })
        }

        res.json({
            ok: true,
            resultadosBD
        })
    })

})


router.get('/', [verificarToken], (req,res) => {
    ResultadosRiesgos.find().exec((err,resultadosR) => {
        if (err) {
            res.status(400).json({
                message: 'no se pudo traer resultados de riesgos',
                err
            })
            
        }

        res.status(200).json({
            ok: true,
            resultadosR
        })
    })
})

module.exports = router;