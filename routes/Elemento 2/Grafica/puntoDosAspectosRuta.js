const express = require('express'),
      aspectosGraph = require('../../../models/Elemento2/Grafica/puntoDosAspectosModel'),
      {verificarToken} = require('../../../server/middlewares/auth'),
      router = express.Router();

      //Crear en la base de datos

      router.post('/create',(req,res)=>{
          const body = req.body;
          let newAspectosGraph = {
            aspectosGrafica: body.aspectosGrafica
          }
          aspectosGraph.create(newAspectosGraph,(err, crearAspectosGrafica)=>{
              if(err){
                  res.status(400).json({
                    message:'Error al guardar el valor de la grafica',
                    err
                  })
              }
              res.json({
                  ok:true,
                  crearAspectosGrafica
              })
          })
      })

      //Consultar}
      router.get('/',(req,res) =>{
          aspectosGraph.find().exec((err,findValueGraph) =>{
              if (err) {
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