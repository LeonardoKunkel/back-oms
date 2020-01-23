const express = require('express'),
      MatrizResponsabilidades = require('../models/Elemento5/matrizResponsabilidadesModel'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();



router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let matrizResponsabilidades = {
        puesto1: body.puesto1,
        puesto2: body.puesto2,
        puesto3: body.puesto3
    }

    MatrizResponsabilidades.create(matrizResponsabilidades, (err, matrizBD) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear matriz de responsabilidades',
                err
            })
        }

        res.status(200).json({
            ok: true,
            matrizBD
        })
    })
})

router.get('/', [verificarToken], (req,res) => {
    MatrizResponsabilidades.find().exec((err,matriz) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer matriz de responsabilidades',
                err
            })
        }

        res.status(200).json({
            ok: true,
            matriz
        })
    })
})


module.exports = router;