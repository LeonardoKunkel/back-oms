const express = require('express'),
      simulacro2Model = require('../../models/Elemento13/simulacro2Model'),
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
    
    simulacro2Model.create(newDatos, (err, crearSimulacro2) => {
        if (err) {
            res.status(400).json ({
                message: 'Error al guardar',
                err
            });
        }
        res.json({
            ok: true,
            crearSimulacro2
        });
    });
});

router.get('/', [verificarToken], (req, res) => {
    simulacro2Model.find().exec((err, findSimulacro2) => {
        if (err) {
            res.status(400).json({
                ok: true,
                findSimulacro2
            });
        }
        res.status(200).json({
            ok: true,
            findSimulacro2
        });
    });
});

module.exports = router;
