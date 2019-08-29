const express = require('express'),
                {verificarToken} = require('../server/middlewares/auth'),
                Puntodos = require('../models/puntodosModel')
                router = express.Router();

router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let newPuntoDos = {
        compresor: body.compresor,
        hidroneumatico: body.hidroneumatico,
        plantaEmergencia: body.plantaEmergencia,
        pararayos: body.pararayos,
        cisterna: body.cisterna,
        bombaAgua: body.bombaAgua,
        cambioAceite: body.cambioAceite,
        bodegaLubricantes: body.bodegaLubricantes,
        almacenResiduosPeligrosos: body.almacenResiduosPeligrosos
    }

    Puntodos.create(newPuntoDos, (err,newPuntoDos) => {
        if (err) {
            res.json({
                message: 'Error al guardar Punto Dos',
                err
            })
        }
        newPuntoDos.save();
        res.json({
            ok:true,
            newPuntoDos
        })
    })
})

router.get('/:id', [verificarToken], (req, res) => {
    const id = req.params.id;
    Puntodos.findById(id)
            .exec((err, puntodosDB) => {
                if (err) {
                    return res.status(500).json({
                        message: 'no se pudo cargar el punto dos',
                        err
                    })
                }
                res.json({
                    ok:true,
                    puntodosDB
                })
            })
})

 