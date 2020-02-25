const express = require('express'),
AnexSeg1 = require('../models/Elemento12/anexoSeguridad'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let AnexSeg2 = {
        texto1:body.texto1,
        texto2:body.texto2,
    }

    AnexSeg1.create(AnexSeg2,(err,AnexSeg2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            AnexSeg2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    AnexSeg1.find().
    exec((err,AnexSeg3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            AnexSeg3
        })
    })
})

module.exports = router;