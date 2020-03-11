const express = require('express'),
      posts= require('../models/postModel'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();

router.post('/', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let resultados = {
        mensaje:body.mensaje,
        coordenadas:body.coordenadas 
    }
 
    posts.create(resultados, (err, resultadosBD) => {
        if (err) {
            res.status(400).json({
                message: 'no se pudo crear resultados de Riesgo',
                err
            })
        }

        res.json({
            ok: true,
            resultadosBD
        })
    })

})


router.get('/', [verificarToken], (req,res) => {
    posts.find().exec((err,resultadosR) => {
        if (err) {
            res.status(400).json({
                message: 'no se pudo traer resultados de riesgos',
                err
            })
            
        }

        res.status(200).json({
            ok: true,
            resultadosR
        })
    })
})

module.exports = router;