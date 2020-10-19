const express = require('express'),
      photo = require('../../models/EvidencesModels/Element1Photo'),
      multer = require('multer'),
      path = require('path'),
      fs = require('fs'),
      app = express();
      const uuid = require('uuid/v4');
      

    //Sotorage para leer el fichero y ponerle la extension
const storage = multer.diskStorage({
    destination: path.join('public/uploads/Elemento1/photos'),
    filename: (req, file, cb) =>{
        cb(null, uuid() + path.extname( file.originalname));
    }
});

    //Settings

    app.set('views', path.join(__dirname,'views'));
    app.set('view engine', 'ejs');

    //Middlewares
    app.use(multer({storage}).single('myfile'));

    app.post('/create',(req,res) =>{
        let body = req.body;
        let file = req.file;
        
        let newPhoto ={
            title: body.title,
            description: body.description,
            filename: file.filename,
            path: 'public/uploads/Elemento1/photos/' + req.file.filename,
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

    //Ya sirve
    app.delete('/delete', (req, res) =>{
        res.send('Hola eduardo')
        var filePath = 'public/uploads/Elemento1/documents/1.1.45.-_ANEXO_E1_Propuesta_Economica_P1_Y_P2.docx' ; 
        fs.unlinkSync(filePath);
    });

    app.get('/', (req, res) =>{
        photo.find().exec((err, images) =>{
            if (err) {
                res.status(404).json({
                    ok:false,
                    message: 'Error al subir el documento'
                })
            }
            res.json({
                ok:true,
                images
            })
        })
    });

    module.exports = app;
