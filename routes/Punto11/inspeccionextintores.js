const express = require('express'),
InspeccionMensual1 = require('../models/Elemento11/FO-07'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let InspeccionMensual2 = {
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
        texto93:body.texto93,
        texto94:body.texto94,
        texto95:body.texto95,
        texto96:body.texto96,
        texto97:body.texto97,
        texto98:body.texto98,
        texto99:body.texto99,
        texto100:body.texto100,
        texto101:body.texto101,
        texto102:body.texto102,
        texto103:body.texto103,
        texto104:body.texto104,
    }

    InspeccionMensual1.create(InspeccionMensual2,(err,InspeccionMensual2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            InspeccionMensual2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    InspeccionMensual1.find().
    exec((err,InspeccionMensual3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            InspeccionMensual3
        })
    })
})

module.exports = router;