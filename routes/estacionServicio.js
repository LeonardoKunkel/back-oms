const express = require('express'),
      estacionServicio= require('../models/estacionServicioModel'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();

      //Crear en la base de datos

router.post('/create',[verificarToken],(req,res)=>{
    const body = req.body;
    console.log(body);
    let newDatos = {
        nombreEstacionServicio:body.nombreEstacionServicio,
        estado:body.estado,
        ciudad:body.ciudad,
        colonia:body.colonia,
        cp:body.cp,
        calleNumero:body.calleNumero,
        correoElectronico:body.correoElectronico,
        telefono:body.telefono,
        gerenteEstacion:body.gerenteEstacion,
        representanteTecnico:body.representanteTecnico,
        maximaAutoridad:body.maximaAutoridad,
    };
    estacionServicio.create(newDatos,(err,crearDatesEstacionServicio) => {
        if (err) {
            res.status(400).json({
                message:'Error al almacenar',
                err
            });
        }
        res.json({
            ok:true,
            crearDatesEstacionServicio
        });
    });
});

// Consultar los datos en la base de datos

router.get('/',[verificarToken],(req,res) => {
    estacionServicio.find().exec((err,findEstacion) => {
        if(err){
            res.status(400).json({
                message:'No se pudo consultar la estacion',
                err
            });
        }
        res.status(200).json({
            ok:true,
            findEstacion
        });
    });
}); 

router.get('/:id',[verificarToken],(req, res) => {
    let id = req.params.id;
    estacionServicio.findById(id).exec((err,estacion) => {
        if (err) {
            return res.status(400).json({
                message:'No se pudo encontrar esa estacion',
                err
            });
        }

        res.status(200).json({
            ok:true,
            estacion
        });
    });
});

router.put('/:id',(req, res) => {
    let id = req.params.id;
    let body2 = req.body;

    estacionServicio.findById(id,(err,estacionService) => {
        if (err) {
            return res.status(400).json({
                ok:true,
                message:'No se encontro el id solicitado',
                err
            });
        }
        if (!estacionService) {
            return res.status(500).json({
                ok:true,
                message:'La estacion con este id no existe'
            });
        }
        estacionService.nombreEstacionServicio = body2.nombreEstacionServicio,
        estacionService.estado = body2.estado,
        estacionService.ciudad = body2.ciudad,
        estacionService.colonia = body2.colonia,
        estacionService.cp = body2.cp,
        estacionService.calleNumero = body2.calleNumero,
        estacionService.correoElectronico = body2.correoElectronico,
        estacionService.telefono = body2.telefono,
        estacionService.gerenteEstacion = body2.gerenteEstacion,
        estacionService.representanteTecnico = body2.representanteTecnico,
        estacionService.maximaAutoridad = body2.maximaAutoridad

        estacionService.save((err, estacionActualizada) => {
            if (err) {
                return res.status(400).json({
                    ok:false,
                    message:'Error al actualizar'
                });                    
            }
            res.status(200).json({
                estacionActualizada
            });
        });
    });
});
module.exports = router;