const express = require('express'),
      riesgosModelGrafica = require('../../../models/Elemento2/Grafica/riesgosModelGrafica'),
      {verificarToken} = require('../../../server/middlewares/auth'),
      router = express.Router();
//Crear en la base de datos
 router.post('/create',(req,res)=>{
     const body = req.body;
     let newRiesgosGraph = {
         riesgosGrafica: body.riesgosGrafica
     }
     riesgosModelGrafica.create(newRiesgosGraph,(err, crearRiesgos) =>{
         if (err) {
             res.status(400).json({
                message:'Error al guardar el valor de la grafica',
                err
             })
         }
         res.json({
             ok:true,
             crearRiesgos
         })
     })
 })

 //Consultar
 router.get('/',(req,res) =>{
     riesgosModelGrafica.find().exec((err,findValueGraph) =>{
         if(err){
             res.status(400).json({
                message:'No se encontro ese valor de la grafica',
                err
             })
         }
         res.status(200).json({
             ok:true,
             findValueGraph
         })
     })
 })

 module.exports = router;