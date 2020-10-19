const express = require('express'),
      multer = require('multer'),
      path = require('path'),
      app = express();

      //Storage para tipos de documentos subidos
const storage = multer.diskStorage({
    destination: path.join('public/uploads/Elemento2/photos'),
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

    //Settings

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    //Middlewares

    app.use(multer({storage}).single('myfile'));

    app.post('/create',(req,res) =>{
        console.log(req.file);
        res.send('Uploaded0');
    });

    module.exports = app;