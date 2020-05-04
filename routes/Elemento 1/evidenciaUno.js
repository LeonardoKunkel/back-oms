const express = require('express'),
      Imagen = require('../../models/Elemento1/evidenciaUnoModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      app = express();

    app.get('/',(req,res)=>{
        Imagen.find().exec((err,imagenes) =>{
            if(err){
                res.status(404).json({
                    ok: false,
                    message:'Error al traer la imagen'
                })
            }
            res.json({
                ok:true,
                imagenes
            })
        })
    })

    app.post('/create',(req,res) =>{
        let body = req.body;
        let file = req.file;

        let nuevaImagen ={
            title: body.title,
            description: body.description,
            filename: file.filename,
            path: '../../subidas/' + req.file.filename,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size
        }

        Imagen.create(nuevaImagen, (err,imagen)=>{
            if(err){
                res.status(404).json({
                    ok:false,
                    message:'Error al crear la imagen'
                })
            }
            res.json({
                ok:true,
                imagen
            })
        })
    })
    module.exports = app;