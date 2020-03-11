const express = require('express'),
ProgramaLimpieza1 = require('../models/Elemento1'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let ProgramaLimpieza2 = {
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
        check45:body.check45,
        check46:body.check46,
        check47:body.check47,
        check48:body.check48,
        check49:body.check49,
        check50:body.check50,
        check51:body.check51,
        check52:body.check52,
        check53:body.check53,
        check54:body.check54,
        check55:body.check55,
        check56:body.check56,
        check57:body.check57,
        check58:body.check58,
        check59:body.check59,
        check60:body.check60,
        check61:body.check61,
        check62:body.check62,
        check63:body.check63,
        check64:body.check64,
        check65:body.check65,
        check66:body.check66,
        check67:body.check67,
        check68:body.check68,
        check69:body.check69,
        check70:body.check70,
        check71:body.check71,
        check72:body.check72,
        check73:body.check73,
        check74:body.check74,
        check75:body.check75,
        check76:body.check76,
        check77:body.check77,
        check78:body.check78,
        check79:body.check79,
        check80:body.check80,
        check81:body.check81,
        check82:body.check82,
        check83:body.check83,
        check84:body.check84,
        check85:body.check85,
        check86:body.check86,
        check87:body.check87,
        check88:body.check88,
        check89:body.check89,
        check90:body.check90,
        check91:body.check91,
    }

    ProgramaLimpieza1.create(ProgramaLimpieza2,(err,ProgramaLimpieza2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            ProgramaLimpieza2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    ProgramaLimpieza1.find().
    exec((err,ProgramaLimpieza3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            ProgramaLimpieza3
        })
    })
})

module.exports = router;