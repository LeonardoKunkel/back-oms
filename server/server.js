require('./config/config');

const   express     = require('express'),
        mongoose    = require('mongoose'),
        bodyParser  = require('body-parser'),
        multer      = require('multer'),
        morgan      = require('morgan'),
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
        copetenciaPersonalDirector = require('../routes/Elemento 6/copetenciaPersonalDirector'),
        copetenciaPersonalRepresentante = require('../routes/Elemento 6/copetenciaPersonalRepresentante'),
        copetenciaPersonalEncargado = require('../routes/Elemento 6/copetenciaPersonalEncargado'),
        copetenciaPersonalJEfe =  require('../routes/Elemento 6/copetenciaPersonalJefe'),
        coptetenciaPersonalDespachadores = require('../routes/Elemento 6/copetenciaPersonalDespachadores'),
        copetenciaPersonalMantenimiento = require('../routes/Elemento 6/copetenciaPersonalMantenimiento'),
        copetenciaPersonalContratista = require('../routes/Elemento 6/copetenciaPersonalContratista'),
        estacionServicio = require('../routes/estacionServicio'),
        evidenciaUno = require('../routes/Elemento 1/evidencia1'),
        evidenciaUnoRuta =require('../routes/Elemento 1/evidenciaUno'),
        dieciocho = require('../routes/Elemento 18/dieciochoRuta'),
        lista = require('../routes/Elemento 7/listaRuta'),
        riesgos = require('../routes/Elemento 2/riesgosRuta'),
        aspectos = require('../routes/Elemento 2/aspectosRuta'),
        evidenciaCuatroRuta = require('../routes/Elemento 4/evidencia'),
        evidenciaCincoRuta = require('../routes/Elemento 5/evidencia'),
        evidenciaSeisRuta = require('../routes/Elemento 6/evidencia'),
        evidenciaSieteRuta = require('../routes/Elemento7/evidencia'),
        evidenciaDiezRuta = require('../routes/Elemento 10/evidencia'),
        evidenciaOnceRuta = require('../routes/Elemento 11/evidencia'),
        evidenciaDoceRuta = require('../routes/Elemento 12/evidencia'),
        evidenciaTreceRuta = require('../routes/Elemento 13/evidencia'),
        evidenciaCatorceRuta = require('../routes/Elemento 14/evidencia'),
        evidenciaQuinceRuta = require('../routes/Elemento 15/evidencia'),
        evidenciaDieciseisRuta = require('../routes/Elemento 16/evidencia'),
        evidenciaDiesisiete = require('../routes/Elemento 17/evidencia'),
        evidenciaDiesiocho = require('../routes/Elemento18/evidencia'),
        onceEquipo = require('../routes/Elemento 11/onceRuta'),
        iconosEstacion = require('../routes/iconosEstacionRutas'),
        marcaAguaEstacion = require('../routes/marcaAguaRuta'),
        firmaEstacion = require('../routes/firmaRuta'),
        app = express(),
        cors = require('cors');

        const uuid = require('uuid/v4');
        const path = require('path');

    mongoose.connect("mongodb://localhost:27017/apiOMS", { useNewUrlParser: true, useCreateIndex: true }).then(() =>{
    console.log('Base de datos en  \x1b[43m%s\x1b[40m', 'linea');
    }).catch((err) => {
    console.log('no se pudo conectar',err);
    });
    
    app.use(cors({origin: true, credentials: true}));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json()); 


    
    //Morga y multer para subie imagenes o documentos.
    app.use(morgan('dev'));
    const storage = multer.diskStorage({
        destination: path.join(__dirname, '../Evidencias'),
        filename: (req, file, cb, filename)=>{
            console.log(file);
            cb(null, uuid() +path.extname(file.originalname));
        }
    });
    //Se realiza el middleware para subir evidencia
    app.use(multer({ storage }).single('image'));

    app.use('/img',evidenciaUnoRuta);
    app.use('/evidencia4',evidenciaCuatroRuta);
    app.use('/evidencia5',evidenciaCincoRuta);
    app.use('/evidencia6',evidenciaSeisRuta);
    app.use('/evidencia7',evidenciaSieteRuta);
    app.use('/evidencia10',evidenciaDiezRuta);
    app.use('/evidencia11',evidenciaOnceRuta);
    app.use('/evidencia12',evidenciaDoceRuta);
    app.use('/evidencia13',evidenciaTreceRuta);
    app.use('/evidencia14',evidenciaCatorceRuta);
    app.use('/evidencia15',evidenciaQuinceRuta);
    app.use('/evidencia16',evidenciaDieciseisRuta);
    app.use('/evidencia17',evidenciaDiesisiete);
    app.use('/evidencia18',evidenciaDiesiocho);


    app.use('/user', UsuarioRoutes);
    app.use('/user/login', LoginRoutes);
    app.use('/user/auth', AuthRoutes);
    app.use('/politica',Politica),
    app.use('/objetivosMetas', ObjetivosMetas);
    app.use('/cartaDesignacion',cartaDesignacion);
    app.use('/copetenciaPersonalDirector',copetenciaPersonalDirector);
    app.use('/copetenciaPersonalRepresentante',copetenciaPersonalRepresentante);
    app.use('/copetenciaPersonalEncargado',copetenciaPersonalEncargado);
    app.use('/copetenciaPersonalJefe',copetenciaPersonalJEfe);
    app.use('/coptenciaPersonalDespachadores',coptetenciaPersonalDespachadores);
    app.use('/copetenciaPersonalMantenimiento',copetenciaPersonalMantenimiento);
    app.use('/copetenciaPersonalContratista',copetenciaPersonalContratista);
    app.use('/estacionServicio',estacionServicio);
    app.use('/evidenciaUno',evidenciaUno);
    app.use('/elementoDieciocho', dieciocho);
    app.use('/lista', lista);
    app.use('/riesgos', riesgos);
    app.use('/aspectos', aspectos);
    app.use('/iconosEstacion',iconosEstacion);
    app.use('/marcaAgua',marcaAguaEstacion);
    app.use('/firmaEstacion',firmaEstacion);
    app.use('/equipoCritico', onceEquipo);

    // app.use('/comunicacionParticipacion',ComunicacionParticipacionConsulta)
    // app.use('')


    app.get('/', function (req, res){
        res.json({message: 'Bienvenido a la API de OMS'});
    });
    
    app.listen(process.env.PORT,() => console.log('Esta vivo'));
