const express = require('express'),
      firmaRepresentanteModel = require('../models/firmaRepresentanteModel');
      router = express();
      
      router.post('/create',(req, res) => {
          const body = req.body;
          console.log(body);
          
          let newFirma = {
              firma: body.firma
          };
          
          firmaRepresentanteModel.create(newFirma,(err, crearFirma) => {
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

      router.get('/',(req,res) =>{
          firmaRepresentanteModel.find().exec((err,findFirmaRepresentante) =>{
              if (err) {
                  res.status(400).json({
                      message:'No se pudo traer la firma',
                      err
                  })
              }

              res.status(200).json({
                  ok:true,
                  findFirmaRepresentante
              });
          });
      });

      module.exports = router;