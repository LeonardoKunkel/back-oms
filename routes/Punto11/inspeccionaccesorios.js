const express = require('express'),
InspeccionAccesorios1 = require('../models/Elemento11/FO-04'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let InspeccionAccesorios2 = {
        check1:body.check1,
        check2:body.check2,
        check3:body.check3,
        check4:body.check4,
        check5:body.check5,
        check6:body.check6,
        check7:body.check7,
        check8:body.check8,
        check9:body.check9,
        check10:body.check10,
        check11:body.check11,
        check12:body.check12,
        check13:body.check13,
        check14:body.check14,
        check15:body.check15,
        check16:body.check16,
        check17:body.check17,
    }

    InspeccionAccesorios1.create(InspeccionAccesorios2,(err,InspeccionAccesorios2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            InspeccionAccesorios2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    InspeccionAccesorios1.find().
    exec((err,InspeccionAccesorios3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            InspeccionAccesorios3
        })
    })
})

module.exports = router;