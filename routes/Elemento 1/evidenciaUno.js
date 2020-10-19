;

const express = require('express'),
      Imagen = require('../../models/Elemento1/evidenciaUnoModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      app = express();
//consultas
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
//crear
    app.post('/create',(req,res) =>{
        let body = req.body;
        let file = req.file;

        let nuevaImagen ={
            title: body.title,
            description: body.description,
            filename: file.filename,
            path: 'Evidencias/' + req.file.filename,
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

    //Eliminar 
    app.delete('/:id',(req,res) =>{
        let id = req.params.id;
        Imagen.findByIdAndRemove(id,(err, imagenBorrada) =>{
            if (err) {
                return res.status(400).json({
                    ok:false,
                    message: 'No se pudo borrar',
                    err
                })
            }
            if (!imagenBorrada) {
                return res.status(400).json({
                    ok:false,
                    message: 'No se pudo borrar',
                    err
                })
            }
            res.status(200).json({
                imagenBorrada
            })
        })
    })
    module.exports = app;