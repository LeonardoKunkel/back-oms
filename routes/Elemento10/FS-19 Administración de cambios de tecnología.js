const express = require('express'),
      AdministracionCambioTecnologia = require('../models/Elemento10/FS-19 Administración de cambios de tecnología'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();


router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let cambioTecnologia = {

        fecha1:body.fecha1,
        fecha2:body.fecha2,
        fecha3:body.fecha3,
        fecha4:body.fecha4,
        fecha5:body.fecha5,
        fecha6:body.fecha6,
        fecha7:body.fecha7,
        fecha8:body.fecha8,
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

    }

    AdministracionCambioTecnologia.create(cambioTecnologia,(err, cambioTecnologiaBd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto2',
                err
            })
        }

        res.json({
            ok:true,
            cambioTecnologiaBd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    AdministracionCambioTecnologia.find().
        exec((err,cambioTecnologia) => {
            if (err) {
                res.status(400).json({
                    message: 'error al traer los Aspectos',
                    err
                })
            }

            res.json({
                ok:true,
                cambioTecnologia
            })
        })
})


module.exports = router;