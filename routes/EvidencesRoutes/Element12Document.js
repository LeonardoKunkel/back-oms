const express = require('express'),
      document = require('../../models/EvidencesModels/Element12Document'),
      multer = require('multer'),
      path = require('path'),
      app = express();
      const uuid = require('uuid/v4');

const storage = multer.diskStorage({
    destination: path.join('public/uploads/Elemento12/documents'),
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

    app.set('Views', path.join(__dirname, 'views'));
    app.set('View engine', 'ejs');

    app.use(multer({storage}).single('myfile'));

    app.post('/create', (req, res) =>{
        let body = req.body;
        let file = req.file;

        let newDocument = {
            title: body.title,
            description: body.description,
            filename: file.filename,
            path: 'public/uploads/Elemento12/documents/' + req.file.filename,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size
        }

        document.create(newDocument, (err, documents) =>{
            if (err) {
                res.status(404).json({
                    ok:false,
                    message: 'No se pudo subir el documento'
                })
            }
            res.json({
                ok:true,
                documents
            })
        });
    });

    app.get('/', (req, res) =>{
        document.find().exec((err, documents) =>{
            if (err) {
                res.status(404).json({
                    ok:false,
                    message: 'Error al subir el documento'
                })
            }
            res.json({
                ok:true,
                documents
            })
        })
    });

    module.exports = app;