
const express = require('express'),
      multer = require('multer'),
      upload = multer({dest:'../PruebaDocs'}),
      path = require('path'),
      app = express.Router(),
      app2 = express();

      //Storage para tipos de archivo subidos

      const storage = multer.diskStorage({
          destination : path.join(__dirname, 'public/uploads'),
          filename: (req, file, cb) =>{
              cb(null, file.originalname);
          }
      });

    //SETTINGS

    app2.set('views', path.join(__dirname, 'views'));
    app2.set('view engine', 'ejs');


    //Middleware
    app2.use(multer({
        storage
    }).single('myfile'));

    app2.post('/create',(req,res) =>{
        console.log(req.file);
        res.send('Uploaded');
    });

      module.exports = app2;  