const express = require('express'),
      simulacroModel = require('../../models/Elemento13/simulacroModel'),
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
    
    simulacroModel.create(newDatos, (err, crearSimulacro) => {
        if (err) {
            res.status(400).json ({
                message: 'Error al guardar',
                err
            });
        }
        res.json({
            ok: true,
            crearSimulacro
        });
    });
});

router.get('/', [verificarToken], (req, res) => {
    simulacroModel.find().exec((err, findSimulacro) => {
        if (err) {
            res.status(400).json({
                ok: true,
                findSimulacro
            });
        }
        res.status(200).json({
            ok: true,
            findSimulacro
        });
    });
});

module.exports = router;
