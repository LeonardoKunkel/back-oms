const riesgosModelGrafica = require('../../../models/Elemento2/Grafica/riesgosModelGrafica');

const express = require('express'),
      analisisGraph = require('../../../models/Elemento2/Grafica/analisisModelGrafica'),
      {verificarToken} = require('../../../server/middlewares/auth'),
      router = express.Router();

      //Crear en la base de datos

      router.post('/create',(req,res) =>{
          const body = req.body;
          let newAnalisisGraph = {
              analisisGrafica: body.analisisGrafica
          }

          analisisGraph.create(newAnalisisGraph,(err,crearAnalisisGraficca) =>{
              if (err) {
                  res.status(400).json({
                    message:'Error al guardar el valor de la grafica',
                    err
                  })
              }

              res.json({
                  ok:true,
                  crearAnalisisGraficca
              })
          })
      })

      //Consultar datos de la BD

      router.get('/',(req,res) =>{
          analisisGraph.find().exec((err,findValueGraph) =>{
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
      });

      module.exports = router;