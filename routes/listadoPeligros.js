const express = require('express'),
      ListadoPeligros = require('../models/Elemento2/listadoPeligrosModel'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();


router.post('/create', [verificarToken], (req,res) => {
    const body = req.body
    console.log(body);

    listadoPeligros = {
        C1P3:body.C1P3,
        C2P3:body.C2P3,
        C3P3:body.C3P3,
        C4P3:body.C4P3,
        C5P3:body.C5P3,
        C6P3:body.C6P3,
        C7P3:body.C7P3,
        C8P3:body.C8P3,
        C9P3:body.C9P3,
        C10P3:body.C10P3,
        C11P3:body.C11P3,
        C12P3:body.C12P3,
        C13P3:body.C13P3,
        C14P3:body.C14P3,
        C15P3:body.C15P3,
        C16P3:body.C16P3,
        C17P3:body.C17P3,
        C18P3:body.C18P3,
        C19P3:body.C19P3,
        C20P3:body.C20P3,
        C21P3:body.C21P3,
        C22P3:body.C22P3,
        C23P3:body.C23P3,
        C24P3:body.C24P3,
        C25P3:body.C25P3,
        C26P3:body.C26P3,
        C27P3:body.C27P3,
        C28P3:body.C28P3,
        C29P3:body.C29P3,
        C1P1:body.C1P1,
        C2P1:body.C2P1,
        C3P1:body.C3P1,
        C4P1:body.C4P1,
        C5P1:body.C5P1,
        C6P1:body.C6P1,
        C7P1:body.C7P1,
        C8P1:body.C8P1,
        C9P1:body.C9P1,
        C10P1:body.C10P1,
        C11P1:body.C11P1,
        C12P1:body.C12P1,
        C13P1:body.C13P1,
        C14P1:body.C14P1,
        C15P1:body.C15P1,
        C16P1:body.C16P1,
        C17P1:body.C17P1,
        C18P1:body.C18P1,
        C19P1:body.C19P1,
        C20P1:body.C20P1,
        C21P1:body.C21P1,
        C22P1:body.C22P1,
        C23P1:body.C23P1,
        C24P1:body.C24P1,
        C25P1:body.C25P1,
        C26P1:body.C26P1,
        C27P1:body.C27P1,
        C28P1:body.C28P1,
        C29P1:body.C29P1,
        C1P2:body.C1P2,
        C2P2:body.C2P2,
        C3P2:body.C3P2,
        C4P2:body.C4P2,
        C5P2:body.C5P2,
        C6P2:body.C6P2,
        C7P2:body.C7P2,
        C8P2:body.C8P2,
        C9P2:body.C9P2,
        C10P2:body.C10P2,
        C11P2:body.C11P2,
        C12P2:body.C12P2,
        C13P2:body.C13P2,
        C14P2:body.C14P2,
        C15P2:body.C15P2,
        C16P2:body.C16P2,
        C17P2:body.C17P2,
        C18P2:body.C18P2,
        C19P2:body.C19P2,
        C20P2:body.C20P2,
        C21P2:body.C21P2,
        C22P2:body.C22P2,
        C23P2:body.C23P2,
        C24P2:body.C24P2,
        C25P2:body.C25P2,
        C26P2:body.C26P2,
        C27P2:body.C27P2,
        C28P2:body.C28P2,
        C29P2:body.C29P2,
        C1P4:body.C1P4,
        C2P4:body.C2P4,
        C3P4:body.C3P4,
        C4P4:body.C4P4,
        C5P4:body.C5P4,
        C6P4:body.C6P4,
        C7P4:body.C7P4,
        C8P4:body.C8P4,
        C9P4:body.C9P4,
        C10P4:body.C10P4,
        C11P4:body.C11P4,
        C12P4:body.C12P4,
        C13P4:body.C13P4,
        C14P4:body.C14P4,
        C15P4:body.C15P4,
        C16P4:body.C16P4,
        C17P4:body.C17P4,
        C18P4:body.C18P4,
        C19P4:body.C19P4,
        C20P4:body.C20P4,
        C21P4:body.C21P4,
        C22P4:body.C22P4,
        C23P4:body.C23P4,
        C24P4:body.C24P4,
        C25P4:body.C25P4,
        C26P4:body.C26P4,
        C27P4:body.C27P4,
        C28P4:body.C28P4,
        C29P4:body.C29P4
    }

    ListadoPeligros.create(listadoPeligros, (err,listadoBD) =>{
        if (err) {
            res.status(400).json({
                message: 'no se pudo crear el listado de Peligros',
                err
            })
        }

        res.status(200).json({
            ok:true,
            listadoBD
        })
    })
})

router.get('/', [verificarToken], (req,res) => {
    ListadoPeligros.find().exec((err,listadoP) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer listado',
                err
            })
        }

        res.status(200).json({
            ok: true,
            listadoP
        })
    })
})

module.exports = router;