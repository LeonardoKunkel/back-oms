const express = require('express'),
    documents = require('../../models/Elemento1/evidenciaDocumentModel'),
    {verificarTokent} = require('../../server/middlewares/auth'),
    app = express();

    //Crear en la base de datos







    app.post('/create',async (req, res) =>{
        // let body = req.body;
        // let file = req.file;

        // let newDocument = {
        //     title: body.title,
        //     description: body.description,
        //     filename: file.filename,
        //     path: 'subidas/' + req.file.filename,
        //     originalname: file.originalname,
        //     mimetype: file.mimetype,
        //     size: file.size
        // }

        // documents.create(newDocument, (err, doc) =>{
        //     if (err) {
        //         res.status(404).json({
        //             ok:true,
        //             message: 'Error al cargar documento'
        //         })
        //     }
        //     res.json({
        //         ok:true,
        //         doc
        //     })
        // })
    });

    app.get('/',(req, res)=>{
        // documents.find().exec((err,documentos) =>{
        //     if (err) {
        //         res.status(404).json({
        //             ok:false,
        //             message:'Error al consultar los documentos'
        //         })
        //     }
        //     res.json({
        //         ok:true,
        //         documentos
        //     })
        // })
        
     res.send ( '<h1> Hello world </h1>' ); 
    });

    module.exports = app;