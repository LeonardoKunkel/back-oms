const express = require('express'),
      iconosEstacionModel = require('../models/iconosEstacion');
      router = express();
      
      router.post('/create',(req, res) => {
          const body = req.body;
          console.log(body);
          
          let newLista = {
              imagen: body.imagen
          };
          
          iconosEstacionModel.create(newLista,(err, crearLista) => {
              if(err) {
                  res.status(400).json({
                      message: 'Error al crear la lista',
                      err
                  });
              }
              res.json({
                  ok:true,
                  crearLista
              });
          });
      });

      //Consultar en la base de datos
 router.get('/',(req,res) =>{
     iconosEstacionModel.find().exec((err,findPolitica) => {
         if(err){
            res.status(400).json({
              message:'No se pudo traer iconos',
              err
            })
         }
         res.status(200).json({
             ok:true,
             findPolitica
         })
     })
 })
module.exports = router;