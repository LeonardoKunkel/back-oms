const express = require('express'),
      riesgo = require('../../models/Elemento2/riesgosModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      router = express.Router();
      
router.post('/create',[verificarToken],(req,res) => {
    const body = req.body;
    console.log(body);
    
    let newRiesgos = {
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
        C1: body.C1,
        C2: body.C2,
        C3: body.C3,
        C4: body.C4,
        C5: body.C5,
        C6: body.C6,
        C7: body.C7,
        C8: body.C8,
        C9: body.C9,
        C10: body.C10,
        C11: body.C11,
        C12: body.C12,
        C13: body.C13,
        C14: body.C14,
        C15: body.C15,
        C16: body.C16,
        C17: body.C17,
        C18: body.C18,
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
    }
    
    riesgo.create(newRiesgos,(err,crearRiesgos) => {
        if (err) {
            res.status(400).json({
                message: 'Error al crear los riesgos',
                err
            })
        }
        res.json({
            ok: true,
            crearRiesgos
        })
    })
    
    router.get('/',[verificarToken],(req,res) => {
        riesgo.find().exec((err, findRiesgo) => {
            if (err) {
                res.status(400).json({
                    message: 'Error al traer los riesgos',
                    err
                })
            }
            res.json({
                ok: true,
                findRiesgo
            })
        })
    })
})
module.exports = router;