const express = require('express'),
     firmaEstacionModel = require('../models/firmaModel');
      router = express();
      
      router.post('/create',(req, res) => {
          const body = req.body;
          console.log(body);
          
          let newFirma = {
              firma: body.firma
          };
          
          firmaEstacionModel.create(newFirma,(err, crearFirma) => {
              if(err) {
                  res.status(400).json({
                      message: 'Error al crear la M;arca',
                      err
                  });
              }
              res.json({
                  ok:true,
                  crearFirma
              });
          });
      });

      //Consultar en la base de datos
 router.get('/',(req,res) =>{
     firmaEstacionModel.find().exec((err,findFirma)=>{
         if(err){
            res.status(400).json({
              message:'No se pudo traer Marca agua',
              err
            })
         }
         res.status(200).json({
             ok:true,
             findFirma
         })
     })
 })
module.exports = router;