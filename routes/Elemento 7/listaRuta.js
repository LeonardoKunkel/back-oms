const express = require('express'),
      lista = require('../../models/Elemento7/listaModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      router = express.Router();
      
router.post('/create',[verificarToken],(req,res) => {
    const body = req.body;
    console.log(body);
    
    let newLista = {
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
        C19: body.C19,
        C20: body.C20,
        C21: body.C21,
        C22: body.C22,
        C23: body.C23,
        C24: body.C24,
        C25: body.C25,
        C26: body.C26,
        C27: body.C27,
        C28: body.C28,
        C29: body.C29,
        C30: body.C30,
        C31: body.C31,
        C32: body.C32,
        C33: body.C33,
        C34: body.C34,
        C35: body.C35,
        C36: body.C36,
        C37: body.C37,
        C38: body.C38,
        C39: body.C39,
        C40: body.C40,
        C41: body.C41,
    }
    
    lista.create(newLista,(err,crearLista) => {
        if(err) {
            res.status(400).json({
                message: 'Error al crear la lista',
                err
            })
        }
        res.json({
            ok:true,
            crearLista
        })
    })
    
    router.get('/',[verificarToken],(req,res) => {
        lista.find().exec((err, findLista) => {
            if(err) {
                res.status(400).json({
                    message: 'Error al traer la lista',
                    err
                })
            }
            res.json({
                ok: true,
                findLista
            })
        })
    })
})
module.exports = router;