const express = require('express'),
PlanSim1 = require('../models/Elemento13/planeacionSimulacros'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let PlanSim2 = {
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
        fecha1:body.fecha1,
    }

    PlanSim1.create(PlanSim2,(err,PlanSim2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            PlanSim2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    PlanSim1.find().
    exec((err,PlanSim3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            PlanSim3
        })
    })
})

module.exports = router;