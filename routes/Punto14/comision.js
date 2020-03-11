const express = require('express'),
ComisionReguladora1 = require('../models/Elemento14/comisionReguladoraEnergia'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let ComisionReguladora2 = {
        texto1:body.texto1,
        fecha1:body.fecha1,
        check1:body.check1,
        check2:body.check2,
        check3:body.check3,
        check4:body.check4,
    }

    ComisionReguladora1.create(ComisionReguladora2,(err,ComisionReguladora2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            ComisionReguladora2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    ComisionReguladora1.find().
    exec((err,ComisionReguladora3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            ComisionReguladora3
        })
    })
})

module.exports = router;