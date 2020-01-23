const express = require('express'),
      CopetenciaPersonal = require('../models/Elemento6/copetenciaPersonalModel'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();



router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let copetencias = {
        area: body.area,
        nombre: body.nombre,
        caracteristicasPersonales: body.caracteristicasPersonales,
        requerimientosFisicos: body.requerimientosFisicos,
        conocimientosFisiscos: body.conocimientosFisiscos,
        deztrezasTecnicas: body.deztrezasTecnicas,
        nivelAcademico: body.nivelAcademico,
        objetivoPuesto: body.objetivoPuesto,
        funcionesEspecificas: body.funcionesEspecificas,
        personalCargo: body.personalCargo,
        herramientasEquipos: body.herramientasEquipos,
        proteccionPersonal: body.proteccionPersonal
    }

    CopetenciaPersonal.create(copetencias, (err, copetenciaBD) => {
        if (err) {
            res.status(400).json({
                message: 'error no se pudo crear copentecias personales',
                err
            })
        }

        res.status(200).json({
            ok: true,
            copetenciaBD
        })
    })
})


module.exports = router;