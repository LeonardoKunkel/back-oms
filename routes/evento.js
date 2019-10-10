const express  = require('express'),
      Evento = require('../models/evento'),
      Usuario = require('../models/UsuarioModel'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();


router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body)

        Evento.create(body, (err, evento) => {
            if (err) {
                return res.json({
                    message: 'Error al crear evento en el calendario',
                    err
                })
            }
            evento.save();
            //user.eventos.push(evento);
            //user.save()

            res.json({
                ok: true,
                evento
            })
        })
    })

router.get('/',[verificarToken],(req,res) => {
    //const id = req.params.id;
    //console.log(id);
    
    Evento.find()
    .exec((err, eventos) => {
        //console.log(evento);
        
        if (err) {
            return res.status(500).json({
                message: 'Error al cargar evento',
                err
            })
        }

        res.json({
            ok: true,
            eventos
        })
    })
})

module.exports = router;