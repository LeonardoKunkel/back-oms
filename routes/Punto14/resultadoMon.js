const express = require('express'),
ResultadoMonitoreo1 = require('../models/Elemento14/resultadoMonitoreoMedicionParametrosDesemp'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let ResultadoMonitoreo2 = {
        texto1:body.texto1,
        texto2:body.texto2,
        texto3:body.texto3,
        texto4:body.texto4,
        texto5:body.texto5,
        texto6:body.texto6,
    }

    ResultadoMonitoreo1.create(ResultadoMonitoreo2,(err,ResultadoMonitoreo2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            ResultadoMonitoreo2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    ResultadoMonitoreo1.find().
    exec((err,ResultadoMonitoreo3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            ResultadoMonitoreo3
        })
    })
})

module.exports = router;