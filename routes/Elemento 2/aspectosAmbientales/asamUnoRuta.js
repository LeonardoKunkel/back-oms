const express = require('express'),
      asamUno = require('../../../models/Elemento2/aspectosAmbientales/asamUnoModel'),
      {verificarToken} = require('../../../server/middlewares/auth'),
      router = express.Router();

router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);
    
    let newAsamUno = {
        F1: body.F1,
        F2: body.F2,
        F3: body.F3,
        F4: body.F4,
        F5: body.F5,
        F6: body.F6,
        F7: body.F7,
        F8: body.F8,
        F9: body.F9,
        F10: body.F10,
        F11: body.F11,
        F12: body.F12,
        F13: body.F13,
        F14: body.F14,
        F15: body.F15,
        F16: body.F16,
        F17: body.F17,
        F18: body.F18,
        N1: body.N1,
        N2: body.N2,
        N3: body.N3,
        N4: body.N4,
        N5: body.N5,
        N6: body.N6,
        N7: body.N7,
        N8: body.N8,
        N9: body.N9,
        N10: body.N10,
        N11: body.N11,
        N12: body.N12,
        N13: body.N13,
        N14: body.N14,
        N15: body.N15,
        N16: body.N16,
        N17: body.N17,
        N18: body.N18,
        M1: body.M1,
        M2: body.M2,
        M3: body.M3,
        M4: body.M4,
        M5: body.M5,
        M6: body.M6,
        M7: body.M7,
        M8: body.M8,
        M9: body.M9,
        M10: body.M10,
        M11: body.M11,
        M12: body.M12,
        M13: body.M13,
        M14: body.M14,
        M15: body.M15,
        M16: body.M16,
        M17: body.M17,
        M18: body.M18,
        VT1: body.VT1,
        VT2: body.VT2,
        VT3: body.VT3,
        VT4: body.VT4,
        VT5: body.VT5,
        VT6: body.VT6,
        VT7: body.VT7,
        VT8: body.VT8,
        VT9: body.VT9,
        VT10: body.VT10,
        VT11: body.VT11,
        VT12: body.VT12,
        VT13: body.VT13,
        VT14: body.VT14,
        VT15: body.VT15,
        VT16: body.VT16,
        VT17: body.VT17,
        VT18: body.VT18,
    }
    asamUno.create(newAsamUno,(err,crearAsamuno) => {
        if(err) {
            res.status(400).json({
                message: 'error al crear',
                err
            })
        }
        res.json({
            ok:true,
            crearAsamuno
        })
    })
    
    router.get('/',[verificarToken],(req,res) => {
        asamUno.find().exec((err, findAsamuno) => {
            if(err) {
                res.status(400).json({
                    message: 'Error al traer',
                    err
                })
            }
            res.json({
                ok: true,
                findAsamuno
            })
        })
    })
})
module.exports = router;