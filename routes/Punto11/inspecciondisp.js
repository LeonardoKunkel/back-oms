const express = require('express'),
InspeccionDispensarios1 = require('../models/Elemento11/FO-03'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let InspeccionDispensarios2 = {
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
        check18:body.check18,
        check19:body.check19,
        check20:body.check20,
        check21:body.check21,
        check22:body.check22,
        check23:body.check23,
    }

    InspeccionDispensarios1.create(InspeccionDispensarios2,(err,InspeccionDispensarios2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            InspeccionDispensarios2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    InspeccionDispensarios1.find().
    exec((err,InspeccionDispensarios3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            InspeccionDispensarios3
        })
    })
})

module.exports = router;