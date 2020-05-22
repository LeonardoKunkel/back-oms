const express = require('express'),
      evidenciaModel = require('../../models/Elemento5/evidenciaModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      app = express();
      
      app.get('/',(req,res)=>{
          evidenciaModel.find().exec((err,imagenes) =>{
              if (err) {
                  res.status(404).json({
                      ok:false,
                      message:'Error al traer el archivo'
                  })
              }
              res.json({
                  ok:true,
                  imagenes
              })
          })
      })

      app.post('/create',(req,res)=>{
          let body = req.body;
          let file = req.file;

          let nuevaImagen = {
              title: body.title,
              description: body.description,
              filename: file.filename,
              path:'../../Evidencias' + req.file.filename,
              originalname: file.originalname,
              mimetype: file.mimetype,
              size: file.size
          }
          evidenciaModel.create(nuevaImagen,(err,imagen)=>{
            if (err) {
                res.status(404).json({
                    ok:false,
                    message:'Error al traer la imagen'
                })
            }
            res.json({
                ok:true,
                imagen
            })
          })
      })
      module.exports = app;