const express = require('express'),
      evaluacionModel = require('../../models/Elemento14/evaluacionModel'),
      { verificarToken } = require('../../server/middlewares/auth'),
      router = express.Router();

router.post('/create', [verificarToken], (req, res) => {
    const body = req.body;
    console.log(body);
    let newDatos = {
        fecha1: body.fecha1,
        fecha2: body.fecha2,
        fecha3: body.fecha3,
        check1: body.check1,
        check2: body.check2,
        check3: body.check3,
        check4: body.check4,
        check5: body.check5,
        check6: body.check6,
        check7: body.check7,
        check8: body.check8,
        check9: body.check9,
        check10: body.check10,
        check11: body.check11,
        check12: body.check12,
        check13: body.check13,
        check14: body.check14,
        check15: body.check15,
        check16: body.check16,
        check17: body.check17,
        check18: body.check18,
        check19: body.check19,
        check20: body.check20,
        check21: body.check21,
        check22: body.check22,
    };
    
    evaluacionModel.create(newDatos, (err, crearEvaluacion) => {
        if (err) {
            res.status(400).json ({
                message: 'Error al guardar',
                err
            });
        }
        res.json ({
            ok: true,
            crearEvaluacion
        });
    });
});

router.get('/', [verificarToken], (req, res) => {
    evaluacionModel.find().exec((err, findEvaluacion) => {
        if (err) {
            res.status(400).json({
                ok: true,
                findEvaluacion
            });
        }
        res.status(200).json({
            ok: true,
            findEvaluacion
        });
    });
});

module.exports = router;