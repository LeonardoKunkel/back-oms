const express = require('express'),
      ComisionREguladoraEnergia = require('../models/Elemento 14/FS-31 Evaluación de Requisitos Legales/Comisión Reguladora de Energia'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();


router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let comisionReq = {

        texto1:body.texto1,
        fecha1:body.fecha1,
        check1:body.check1,
        check2:body.check2,
        check3:body.check3,
        check4:body.check4,

    }

    ComisionREguladoraEnergia.create(comisionReq,(err, comisionReqBd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto2',
                err
            })
        }

        res.json({
            ok:true,
            comisionReqBd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    ComisionREguladoraEnergia.find().
        exec((err,comisionReq) => {
            if (err) {
                res.status(400).json({
                    message: 'error al traer los Aspectos',
                    err
                })
            }

            res.json({
                ok:true,
                comisionReq
            })
        })
})


module.exports = router;