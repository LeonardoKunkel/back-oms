const express = require('express'),
SecretariaTrabajo1 = require('../models/Elemento14/secretarioaTrabajoPrevencionSocial'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let SecretariaTrabajo2 = {
        fecha1:body.fecha1,
        fecha2:body.fecha2,
        fecha3:body.fecha3,
        fecha4:body.fecha4,
        fecha5:body.fecha5,
        fecha6:body.fecha6,
        fecha7:body.fecha7,
        fecha8:body.fecha8,
        fecha9:body.fecha9,
        fecha10:body.fecha10,
        fecha11:body.fecha11,
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
        check1:body.check1,
        check2:body.check2,
        check3:body.check3,
        check4:body.check4,
        check5:body.check5,
        check6:body.check6,
        check7:body.check7,
        check8:body.check8,
        check9:body.check9,
        check10:body.check10,
        check11:body.check11,
        check12:body.check12,
        check13:body.check13,
        check14:body.check14,
        check15:body.check15,
        check16:body.check16,
        check17:body.check17,
        check18:body.check18,
        check19:body.check19,
        check20:body.check20,
        check21:body.check21,
        check22:body.check22,
        check23:body.check23,
        check24:body.check24,
        check25:body.check25,
        check26:body.check26,
        check27:body.check27,
        check28:body.check28,
        check29:body.check29,
        check30:body.check30,
        check31:body.check31,
        check32:body.check32,
        check33:body.check33,
        check34:body.check34,
        check35:body.check35,
        check36:body.check36,
        check37:body.check37,
        check38:body.check38,
        check39:body.check39,
        check40:body.check40,
        check41:body.check41,
        check42:body.check42,
        check43:body.check43,
        check44:body.check44,
    }

    SecretariaTrabajo1.create(SecretariaTrabajo2,(err,SecretariaTrabajo2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            SecretariaTrabajo2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    SecretariaTrabajo1.find().
    exec((err,SecretariaTrabajo3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            SecretariaTrabajo3
        })
    })
})

module.exports = router;