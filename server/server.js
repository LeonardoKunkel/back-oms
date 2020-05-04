require('./config/config');

const   express     = require('express'),
        app         = express(),
        mongoose    = require('mongoose'),
        bodyParser  = require('body-parser'),
        upload      = require('express-fileupload'),
        UsuarioRoutes = require('../routes/usuario'),
        LoginRoutes = require('../routes/login'),
        AuthRoutes  = require('../routes/auth'),
        EventoRoutes = require('../routes/evento'),
        grafica = require('../models/grafica'),
        Mapa = require('../routes/mapa'),
        Politica = require('../routes/Elemento 1/politica'),
        ObjetivosMetas = require('../routes/Elemento 4/objetivosMetasIndicadores'),
        cartaDesignacion = require('../routes/Elemento 5/cartaDesignacion'),
        Riesgos = require('../routes/Elemento 2/riesgosRuta'),
        Aspectos = require('../routes/Elemento 2/aspectosRuta'),
        Asamuno = require('../routes/Elemento 2/aspectosAmbientales/asamUnoRuta'),
        Asamdos = require('../routes/Elemento 2/aspectosAmbientales/asamDosRuta'),
        Asamtres = require('../routes/Elemento 2/aspectosAmbientales/asamTresRuta'),
        Asamcuatro = require('../routes/Elemento 2/aspectosAmbientales/asamCuatroRuta'),
        Asamcinco = require('../routes/Elemento 2/aspectosAmbientales/asamCincoRuta'),
        Asamseis = require('../routes/Elemento 2/aspectosAmbientales/asamSeisRuta'),
        ListaComunicacion = require('../routes/Elemento 7/listaRuta'),
        cors = require('cors');

    mongoose.connect("mongodb://localhost:27017/apiOMS", { useNewUrlParser: true, useCreateIndex: true }).then(() =>{
    console.log('Base de datos en  \x1b[43m%s\x1b[40m', 'linea');
    }).catch((err) => {
    console.log('no se pudo conectar',err);
    });

    app.use(cors({origin: true, credentials: true}));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json()); 
    app.use(upload({ useTempFiles: true }));

    app.use('/user', UsuarioRoutes);
    app.use('/user/login', LoginRoutes);
    app.use('/user/auth', AuthRoutes);
    app.use('/politica',Politica),
    app.use('/objetivosMetas',ObjetivosMetas);
    app.use('/cartaDesignacion',cartaDesignacion);
    app.use('/riesgos',Riesgos);
    app.use('/aspectosAmbientales', Aspectos);
    app.use('/Almacenamiento', Asamuno);
    app.use('/Modulo',Asamdos);
    
    app.use('/Lista_de_Comunicacion',ListaComunicacion);
    //app.use('')



    app.get('/', function (req, res){
        res.json({message: 'Bienvenido a la API de OMS'})
    })
    
    app.listen(process.env.PORT,() => console.log('Esta vivo'));
