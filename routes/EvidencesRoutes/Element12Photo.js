const express = require('express'),
      photo = require('../../models/EvidencesModels/Element12Photo'),
      multer = require('multer'),
      path = require('path'),
      app = express();
      const uuid = require('uuid/v4');

const storage = multer.diskStorage({
    destination: path.join('public/uploads/Elemento12/photos'),
    filename: (req, file, cb) =>{
        cb(null, uuid() + path.extname( file.originalname));
    }
});

    app.set('Views', path.join(__dirname, 'views'));
    app.set('View engine', 'ejs');

    app.use(multer({storage}).single('myfile'));

    app.post('/create',(req, res) =>{
        let body = req.body;
        let file = req.file;
        
        let newPhoto ={
            title: body.title,
            description: body.description,
            filename: file.filename,
            path: 'public/uploads/Elemento12/photos/' + req.file.filename,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size
        }

        photo.create(newPhoto, (err, image) =>{
            if (err) {
                res.status(404).json({
                    ok:false,
                    message: ' Error al subir la imagen'
                })
            }
            res.json({
                ok:true,
                image
            })
        })
    });

    app.get('/', (req, res) =>{
        photo.find().exec((err, images) =>{
            if (err) {
                res.status(404).json({
                   ok:false,
                   message: 'Error al subir imagen' 
                })
            }
            res.json({
                ok:true,
                images
            })
        })
    });

    module.exports = app;