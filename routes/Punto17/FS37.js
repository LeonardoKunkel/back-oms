const express = require('express'),
InformeRevisionDireccion1 = require('../models/Elemento17/informeRevisionDireccion'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let InformeRevisionDireccion2 = {
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
        texto15:body.texto15,
        texto16:body.texto16,
        texto17:body.texto17,
        texto18:body.texto18,
        texto19:body.texto19,
        texto20:body.texto20,
        texto21:body.texto21,
        texto22:body.texto22,
        texto23:body.texto23,
        texto24:body.texto24,
        texto25:body.texto25,
        texto26:body.texto26,
        texto27:body.texto27,
        texto28:body.texto28,
        texto29:body.texto29,
        texto30:body.texto30,
        texto31:body.texto31,
        texto32:body.texto32,
        texto33:body.texto33,
        texto34:body.texto34,
        texto35:body.texto35,
        texto36:body.texto36,
        texto37:body.texto37,
        texto38:body.texto38,
        texto39:body.texto39,
        texto40:body.texto40,
        texto41:body.texto41,
        texto42:body.texto42,
        texto43:body.texto43,
        texto44:body.texto44,
        texto45:body.texto45,
        texto46:body.texto46,
        texto47:body.texto47,
        texto48:body.texto48,
        texto49:body.texto49,
        texto50:body.texto50,
        texto51:body.texto51,
        texto52:body.texto52,
        texto53:body.texto53,
        texto54:body.texto54,
        texto55:body.texto55,
        texto56:body.texto56,
        texto57:body.texto57,
        texto58:body.texto58,
        texto59:body.texto59,
        texto60:body.texto60,
        texto61:body.texto61,
        texto62:body.texto62,
        texto63:body.texto63,
        texto64:body.texto64,
        texto65:body.texto65,
        texto66:body.texto66,
        texto67:body.texto67,
        texto68:body.texto68,
        texto69:body.texto69,
        texto70:body.texto70,
        texto71:body.texto71,
        texto72:body.texto72,
        texto73:body.texto73,
        texto74:body.texto74,
        texto75:body.texto75,
        texto76:body.texto76,
        texto77:body.texto77,
        texto78:body.texto78,
        texto79:body.texto79,
        texto80:body.texto80,
        texto81:body.texto81,
        texto82:body.texto82,
        texto83:body.texto83,
        texto84:body.texto84,
        texto85:body.texto85,
        texto86:body.texto86,
        texto87:body.texto87,
        texto88:body.texto88,
        texto89:body.texto89,
        texto90:body.texto90,
        texto91:body.texto91,
        texto92:body.texto92,
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
        fecha1:body.fecha1,
        fecha2:body.fecha2,
        fehca3:body.fecha3,
        fecha4:body.fecha4,
    }

    InformeRevisionDireccion1.create(InformeRevisionDireccion2,(err, InformeRevisionDireccion2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto17',
                err
            })
        }

        res.json({
            ok:true,
            InformeRevisionDireccion2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    InformeRevisionDireccion1.find().
    exec((err,InformeRevisionDireccion3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            InformeRevisionDireccion3
        })
    })
})


module.exports = router;