const express = require('express'),
PruebaOperativa1 = require('../models/Elemento11/FO-02'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let PruebaOperativa2 = {
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
        texto14:body.texto14,
        texto15:body.texto15,
        texto16:body.texto16,
        texto17:body.texto17,
        texto18:body.texto18,
        texto19:body.texto19,
        texto20:body.texto20,
        texto21:body.texto21,
        texto22:body.texto22,
        texto23:body.texto23,
        texto24:body.texto24,
        texto25:body.texto25,
        texto26:body.texto26,
        texto27:body.texto27,
        texto28:body.texto28,
        texto29:body.texto29,
        texto30:body.texto30,
        texto31:body.texto31,
        texto32:body.texto32,
        texto33:body.texto33,
        texto34:body.texto34,
        texto35:body.texto35,
        texto36:body.texto36,
        texto37:body.texto37,
        texto38:body.texto38,
        texto39:body.texto39,
        texto40:body.texto40,
        texto41:body.texto41,
        texto42:body.texto42,
        texto43:body.texto43,
        texto44:body.texto44,
        texto45:body.texto45,
        texto46:body.texto46,
        texto47:body.texto47,
        texto48:body.texto48,
        fecha1:body.fecha1,
        fecha2:body.fecha2,
        fecha3:body.fecha3,
        fecha4:body.fecha4,
        fecha5:body.fecha5,
        fecha6:body.fecha6,
        fecha7:body.fecha7,
        fecha8:body.fecha8,
        fecha9:body.fecha9,
        fecha10:body.fecha10,
        fecha11:body.fecha11,
        fecha12:body.fecha12,
        fecha13:body.fecha13,
        fecha14:body.fecha14,
        fecha15:body.fecha15,
        fecha16:body.fecha16,
        fecha17:body.fecha17,
        fecha18:body.fecha18,
        fecha19:body.fecha19,
        fecha20:body.fecha20,
        fecha21:body.fecha21,
        fecha22:body.fecha22,
        fecha23:body.fecha23,
        fecha24:body.fecha24,
        fecha25:body.fecha25,
        fecha26:body.fecha26,
        fecha27:body.fecha27,
        fecha28:body.fecha28,
        fecha29:body.fecha29,
        fecha30:body.fecha30,
        fecha31:body.fecha31,
        fecha32:body.fecha32,
        fecha33:body.fecha33,
        fecha34:body.fecha34,
        fecha35:body.fecha35,
        fecha36:body.fecha36,
        fecha37:body.fecha37,
        fecha38:body.fecha38,
        fecha39:body.fecha39,
    }

    PruebaOperativa1.create(PruebaOperativa2,(err,PruebaOperativa2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            PruebaOperativa2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    PruebaOperativa1.find().
    exec((err,PruebaOperativa3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            PruebaOperativa3
        })
    })
})

module.exports = router;