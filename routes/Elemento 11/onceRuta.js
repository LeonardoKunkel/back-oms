const express = require ('express'),
      onceModel = require ('../../models/Elemento11/onceModel'),
      { verificarToken } = require ('../../server/middlewares/auth'),
      router = express.Router();
      
router.post('/create', [verificarToken], (req, res) => {
    const body = req.body;
    console.log(body);
    let newDatos = {
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
        check23: body.check23,
        check24: body.check24,
        check25: body.check25,
        check26: body.check26,
        check27: body.check27,
        check28: body.check28,
        num1: body.num1,
        num2: body.num2,
        num3: body.num3,
        num4: body.num4,
        num5: body.num5,
        num6: body.num6,
        num7: body.num7,
        num8: body.num8,
        num9: body.num9,
        num10: body.num10,
        num11: body.num11,
        num12: body.num12,
        num13: body.num13,
        num14: body.num14,
        num15: body.num15,
        num16: body.num16,
        num17: body.num17,
        num18: body.num18,
    };
    
    onceModel.create(newDatos, (err, crearOnce) => {
        if (err) {
            res.status(400).json ({
                message: 'Error al guardar',
                err
            });
        }
        res.json ({
            ok: true,
            crearOnce
        });
    });
});

router.get('/', [verificarToken], (req, res) => {
    onceModel.find().exec((err, findOnce) => {
        if (err) {
            res.status(400).json({
                ok: true,
                findOnce
            });
        }
        res.status(200).json({
            ok: true,
            findOnce
        });
    });
});

module.exports = router;