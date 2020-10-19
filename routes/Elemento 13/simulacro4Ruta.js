const express = require('express'),
      simulacro4Model = require('../../models/Elemento13/simulacro4Model'),
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
    
    simulacro4Model.create(newDatos, (err, crearSimulacro4) => {
        if (err) {
            res.status(400).json({
                message: 'Error al guardar',
                err
            });
        }
        res.json({
            ok: true,
            crearSimulacro4
        });
    });
});

router.get('/', [verificarToken], (req, res) => {
    simulacro4Model.find().exec((err, findSimulacro4) => {
        if (err) {
            res.status(400).json({
                ok: true,
                findSimulacro4
            });
        }
        res.status(200).json({
            ok: true,
            findSimulacro4
        });
    });
});

module.exports = router;
