const express = require('express'),
      ResultadoMonitoreoAdministracion = require('../models/Elemento 14/FS-30 Resultado de monitoreo y medición de parámetros de desempeño'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();


router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let resultadoMonitoreo = {

        texto1:body.texto1,
        texto2:body.texto2,
        texto3:body.texto3,
        texto4:body.texto4,
        texto5:body.texto5,
        texto6:body.texto6,

    }

    ResultadoMonitoreoAdministracion.create(monitoreoAdministracion,(err, monitoreoAdministracionBd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto2',
                err
            })
        }

        res.json({
            ok:true,
            monitoreoAdministracionBd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    ResultadoMonitoreoAdministracion.find().
        exec((err,monitoreoAdministracion) => {
            if (err) {
                res.status(400).json({
                    message: 'error al traer los Aspectos',
                    err
                })
            }

            res.json({
                ok:true,
                monitoreoAdministracion
            })
        })
})


module.exports = router;