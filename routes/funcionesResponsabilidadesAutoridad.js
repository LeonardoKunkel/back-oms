const express = require('express'),
      FuncionesResponsabilidades = require('../models/Elemento5/funcionesResponsabilidadesAutoridadModel'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();



router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(bosy);

    let funcionesResponsabilidades = {
        fecha: body.fecha,
        nombreEncargado: body.nombreEncargado,
        correoElectronico: body.correoElectronico,
        telefono: body.telefono,
        razonSocial: body.razonSocial,
        calleNumero: body.calleNumero,
        estado: body.estado,
        colonia: body.colonia
    }

    FuncionesResponsabilidades.create(funcionesResponsabilidades, (err, funcionesResponsabilidadesBD) => {
        if (err) {
            res.status(400).json({
                message: 'error al cargar funciones y responsabilidades',
                err
            })
        }

        res.status(200).json({
            ok: true,
            funcionesResponsabilidadesBD
        })
    })


})

router.get('/', [verificarToken], (req,res) => {
    FuncionesResponsabilidades.find().exec((err,funcionesRespo) => {
       if (err) {
            res.status(400).json({
                message: 'error al traer Funciones o responsabilidades',
                err
            })
       }

       res.status(200).json({
           ok: true,
           funcionesRespo
       })
    })
})

module.exports = router;