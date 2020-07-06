const express = require('express'),
      marcaiconosEstacionModel = require('../models/marcaAguaModel');
      router = express();
      
      router.post('/create',(req, res) => {
          const body = req.body;
          console.log(body);
          
          let newLista = {
              marcaAgua: body.marcaAgua
          };
          
          marcaiconosEstacionModel.create(newLista,(err, crearLista) => {
              if(err) {
                  res.status(400).json({
                      message: 'Error al crear la M;arca',
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
     marcaiconosEstacionModel.find().exec((err,findMarcaAgua)=>{
         if(err){
            res.status(400).json({
              message:'No se pudo traer Marca agua',
              err
            })
         }
         res.status(200).json({
             ok:true,
             findMarcaAgua
         })
     })
 })
module.exports = router;