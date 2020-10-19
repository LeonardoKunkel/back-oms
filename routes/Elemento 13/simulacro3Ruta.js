const express = require('express'),
      simulacro3Model = require('../../models/Elemento13/simulacro3Model'),
      { verificarToken } = require('../../server/middlewares/auth'),
      router = express.Router();

router.post('/create', [verificarToken], (req, res) => {
    const body = req.body;
    console.log(body);
    let newDatos = {
        mes: body.mes,
        aviso: body.aviso,
        fecha: body.fecha,
        descripcionEmergencia: body.descripcionEmergencia,
        claseSimulacro: body.claseSimulacro,
    };
    
    simulacro3Model.create(newDatos, (err, crearSimulacro3) => {
        if (err) {
            res.status(400).json({
                message: 'Error al guardar',
                err
            });
        }
        res.json({
            ok: true,
            crearSimulacro3
        });
    });
});

router.get('/', [verificarToken], (req, res) => {
    simulacro3Model.find().exec((err, findSimulacro3) => {
        if (err) {
            res.status(400).json({
                ok: true,
                findSimulacro3
            });
        }
        res.status(200).json({
            ok: true,
            findSimulacro3
        });
    });
});

module.exports = router;
