const express = require('express'),
      aspecto = require('../../models/Elemento 2/aspectosModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      router = express.Router();
      
router.post('/create',[verificarToken],(req,res) => {
    const body = req.body;
    console.log(body);
    
    let newAspectos = {
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
        F19: body.F19,
        F20: body.F20,
        F21: body.F21,
        F22: body.F22,
        F23: body.F23,
        F24: body.F24,
        F25: body.F25,
        F26: body.F26,
        F27: body.F27,
        F28: body.F28,
        F29: body.F29,
        F30: body.F30,
        F31: body.F31,
        F32: body.F32,
        F33: body.F33,
        F34: body.F34,
        F35: body.F35,
        F36: body.F36,
        F37: body.F37,
        F38: body.F38,
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
        N19: body.N19,
        N20: body.N20,
        N21: body.N21,
        N22: body.N22,
        N23: body.N23,
        N24: body.N24,
        N25: body.N25,
        N26: body.N26,
        N27: body.N27,
        N28: body.N28,
        N29: body.N29,
        N30: body.N30,
        N31: body.N31,
        N32: body.N32,
        N33: body.N33,
        N34: body.N34,
        N35: body.N35,
        N36: body.N36,
        N37: body.N37,
        N38: body.N38,
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
        M19: body.M19,
        M20: body.M20,
        M21: body.M21,
        M22: body.M22,
        M23: body.M23,
        M24: body.M24,
        M25: body.M25,
        M26: body.M26,
        M27: body.M27,
        M28: body.M28,
        M29: body.M29,
        M30: body.M30,
        M31: body.M31,
        M32: body.M32,
        M33: body.M33,
        M34: body.M34,
        M35: body.M35,
        M36: body.M36,
        M37: body.M37,
        M38: body.M38,
    }
    
    aspecto.create(newAspectos,(err,crearAspectos) => {
        if(err) {
            res.status(400).json({
                message: 'Error al crear los aspectos',
                err
            })
        }
        res.json({
            ok:true,
            crearAspectos
        })
    })
    
    router.get('/',[verificarToken],(req,res) => {
        aspecto.find().exec((err, findAspecto) => {
            if(err) {
                res.status(400).json({
                    message: 'Error al traer los aspectos',
                    err
                })
            }
            res.json({
                ok: true,
                findAspecto
            })
        })
    })
})
module.exports = router;