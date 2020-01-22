const express = require('express'),
      EvidenciaDos = require('../models/Elemento2/evidencia2Model'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();


router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let evidencia = {
        archivo: body.archivo,
        foto: body.foto,
        imagen: body.imagen,
        descripcion: body.descripcion
    }

    EvidenciaDos.create(evidencia,(err,evidenciaBD) =>{
        if (err) {
            res.status(400).json({
                message: 'error al cargar evidencia',
                err
            })
        }

        res.status(200).json({
            ok: true,
            evidenciaBD
        })
    })
})

router.get('/', [verificarToken], (req,res) => {
    EvidenciaDos.find().
        exec((err, evidenciaBd) => {
            if (err) {
                res.status(400).json({
                    message: 'error al traer la evidencia',
                    err
                })
            }
            res.status(200).json({
                ok: true,
                evidenciaBd
            })
        })
})

module.exports = router;