const express = require('express'),
      simulacro5Model = require('../../models/Elemento13/simulacro5Model'),
      { verificarToken } = require('../../server/middlewares/auth'),
      router = express.Router();

router.post('/create', [verificarToken], (req, res) => {
    const body = req.body;
    console.log(body);
    let newDatos = {
        mes: body.mes,
        aviso: body.aviso,
        fecha: body.fehca,
        descripcionEmergencia: body.descripcionEmergencia,
        claseSimulacro: body.claseSimulacro,
    };
    
    simulacro5Model.create(newDatos, (err, crearSimulacro5) => {
        if (err) {
            res.status(400).json ({
                message: 'Error al guardar',
                err
            });
        }
        res.json({
            ok: true,
            crearSimulacro5
        });
    });
});

router.get('/', [verificarToken], (req, res) => {
    simulacro5Model.find().exec((err, findSimulacro5) => {
        if (err) {
            res.status(400).json({
                ok: true,
                findSimulacro5
            });
        }
        res.status(200).json({
            ok: true,
            findSimulacro5
        });
    });
});

module.exports = router;
