const express = require('express'),
      EvaluacionRiesgos = require('../models/Elemento2/evaluacionRiesgosModel'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();

router.post('/create', [verificarToken], (req,res)=> {
    const body = req.body;
    console.log(body);

    evaluacionRiesgos = {
        F1:body.F1,
        F2:body.F2,
        F3:body.F3,
        F4:body.F4,
        F5:body.F5,
        F6:body.F6,
        F7:body.F7,
        F8:body.F8,
        F9:body.F9,
        F10:body.F10,
        F11:body.F11,
        F12:body.F12,
        F13:body.F13,
        F14:body.F14,
        F15:body.F15,
        F16:body.F16,
        F17:body.F17,
        F18:body.F18,
        R1:body.R1,
        R2:body.R2,
        R3:body.R3,
        R4:body.R4,
        R5:body.R5,
        R6:body.R6,
        R7:body.R7,
        R8:body.R8,
        R9:body.R9,
        R10:body.R10,
        R11:body.R11,
        R12:body.R12,
        R13:body.R13,
        R14:body.R14,
        R15:body.R15,
        R16:body.R16,
        R17:body.R17,
        R18:body.R18,
        C1:body.C1,
        C2:body.C2,
        C3:body.C3,
        C4:body.C4,
        C5:body.C5,
        C6:body.C6,
        C7:body.C7,
        C8:body.C8,
        C9:body.C9,
        C10:body.C10,
        C11:body.C11,
        C12:body.C12,
        C13:body.C13,
        C14:body.C14,
        C15:body.C15,
        C16:body.C16,
        C17:body.C17,
        C18:body.C18,

    }

    EvaluacionRiesgos.create(evaluacionRiesgos,(err,evaluacionBD) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear la evaluacion de riesgos',
                err
            })
        }

        res.status(200).json({
            ok:true,
            evaluacionBD
        })
    })
})


router.get('/',[verificarToken], (req,res) => {
    EvaluacionRiesgos.find().
     exec((err, Evaluacion) => {
         if (err) {
             res.status(400).json({
                 message: 'error al traer riesgos',
                 err
             })
         }

         res.json({
             ok:true,
             Evaluacion
         })
     })
})


module.exports = router;