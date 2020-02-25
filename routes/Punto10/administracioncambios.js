const express = require('express'),
AdminCambiosTec1 = require('../models/Elemento10/administracionCambiosTecnologia'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let AdminCambiosTec2 = {
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
        fecha1:body.fecha1,
        fecha2:body.fecha2,
        fehca3:body.fecha3,
        fecha4:body.fecha4,
        fecha5:body.fecha5,
        fecha6:body.fecha6,
        fehca7:body.fecha7,
        fecha8:body.fecha8,
    }

    AdminCambiosTec1.create(AdminCambiosTec2,(err,AdminCambiosTec2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            AdminCambiosTec2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    AdminCambiosTec1.find().
    exec((err,AdminCambiosTec3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            AdminCambiosTec3
        })
    })
})

module.exports = router;