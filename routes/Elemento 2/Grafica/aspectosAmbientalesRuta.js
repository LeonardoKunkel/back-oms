const express = require('express'),
      aspectosModel = require('../../../models/Elemento2/Grafica/aspectosAmbientalesModel'),
      {verificarToken} = require('../../../server/middlewares/auth'),
      router = express.Router();

      //Crear en la base de datos

      router.post('/create',(req,res)=>{
          const body = req.body;
          let newAspectosGrafica = {
            aspectosGrafica: body.aspectosGrafica
          }

          aspectosModel.create(newAspectosGrafica,(err, crearAspectos)=>{
            if (err) {
                res.status(400).json({
                   message:'Error al guardar el valor de la grafica',
                   err
                })
            }
            res.json({
                ok:true,
                crearAspectos
            })

          })
      })

      //Consultar en la base de datos

        router.get('/',(req,res)=>{
            aspectosModel.find().exec((err,findValueGraph) =>{
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