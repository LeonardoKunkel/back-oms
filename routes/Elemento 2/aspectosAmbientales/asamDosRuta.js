const express = require('express'),
      asamDos = require('../../../models/Elemento2/aspectosAmbientales/asamDosModel'),
      {verificarToken} = require('../../../server/middlewares/auth'),
      router = express.Router();
      
router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);
    
    let newAsamDos = {
        F19: body.F19,
        F20: body.F20,
        F21: body.F21,
        F22: body.F22,
        F23: body.F23,
        F24: body.F24,
        F25: body.F25,
        F26: body.F26,
        N19: body.N19,
        N20: body.N20,
        N21: body.N21,
        N22: body.N22,
        N23: body.N23,
        N24: body.N24,
        N25: body.N25,
        N26: body.N26,
        M19: body.M19,
        M20: body.M20,
        M21: body.M21,
        M22: body.M22,
        M23: body.M23,
        M24: body.M24,
        M25: body.M25,
        M26: body.M26,
        VT19: body.VT19,
        VT20: body.VT20,
        VT21: body.VT21,
        VT22: body.VT22,
        VT23: body.VT23,
        VT24: body.VT24,
        VT25: body.VT25,
        VT26: body.VT26,
    }
    asamDos.create(newAsamDos,(err,crearAsamdos) => {
        if(err) {
            res.status(400).json({
                message: 'error al crear',
                err
            })
        }
        res.json({
            ok:true,
            crearAsamdos
        })
    })
    
    router.get('/',[verificarToken],(req,res) => {
        asamDos.find().exec((err, findAsamdos) => {
            if(err) {
                res.status(400).json({
                    message: 'Error al traer',
                    err
                })
            }
            res.json({
                ok: true,
                findAsamdos
            })
        })
    })
})
module.exports = router;