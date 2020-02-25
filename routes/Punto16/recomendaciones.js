const express = require('express'),
RecomendacionCausaRaiz1 = require('../models/Elemento16/recomendacionesInvestigacionCausaRaiz'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let RecomendacionCausaRaiz2 = {
        texto1:body.texto1,
        texto2:body.texto2,
        texto3:body.texto3,
        texto4:body.texto4,
        texto5:body.texto5,
        texto6:body.texto6,
        texto7:body.texto7,
        texto8:body.texto8,
        texto9:body.texto9,
        texto10:body.texto10,
        texto11:body.texto11,
        texto12:body.texto12,
        texto13:body.texto13,
        fecha1:body.fecha1,
        fecha2:body.fecha2,
        fecha3:body.fecha3,
        fecha4:body.fecha4,
        fecha5:body.fecha5,
    }

    RecomendacionCausaRaiz1.create(RecomendacionCausaRaiz2,(err,RecomendacionCausaRaiz2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            RecomendacionCausaRaiz2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    RecomendacionCausaRaiz1.find().
    exec((err,RecomendacionCausaRaiz3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            RecomendacionCausaRaiz3
        })
    })
})

module.exports = router;