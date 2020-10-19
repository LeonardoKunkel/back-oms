const express = require('express'),
      Imagen = require('../../models/Elemento17/evidenciaModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      multer = require('multer'),
      path = require('path'),
      app = express();

      const storage = multer.diskStorage({
          destination: path.join('public/uploads/Elemento16/photos'),
          filename: (req, file, cb) =>{
              cb(null, file.originalname);
          }
      });
      
          app.set('Views', path.join(__dirname, 'views'));
          app.set('View engine', 'ejs');
      
          app.use(multer({storage}).single('myfile'));

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
            path: '../../Evidencias' + req.file.filename,
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