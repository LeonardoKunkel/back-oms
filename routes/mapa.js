const express = require('express'),
                {verificarToken} = require('../server/middlewares/auth'),
                Mapa = require('../models/mapa'),
                router = express.Router();

router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);
    
    let newMapa = {
        name: body.name,
        cordenadaX: body.cordenadaX,
        cordenadaY: body.cordenadaY,
        Permiso: body.Permiso
    }

    Mapa.create(newMapa, (err, mapa) => {
        if (err) {
            res.json({
                message: 'Error al crear estacion de Servicio',
                err
            })
        }
        res.json({
            ok:true,
            mapa
        })
    })
})

router.get('/', [ verificarToken ], ( req, res ) => {

    Mapa.find()
    .exec((err, puntos) => {
        //console.log(evento);
        
        if (err) {
            return res.status(500).json({
                message: 'Error al cargar Estacion de servicio',
                err
            })
        }

        res.json({
            ok: true,
            puntos
        })
    })
})

module.exports = router;