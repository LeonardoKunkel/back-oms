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
        
        evidenciaDocumentsUno = require('../routes/Elemento 1/evidenciaDocumentRuta'),
        evidenciaUnoRuta =require('../routes/Elemento 1/evidenciaUno'),
        dieciocho = require('../routes/Elemento 18/dieciochoRuta'),
        lista = require('../routes/Elemento 7/listaRuta'),
        riesgos = require('../routes/Elemento 2/riesgosRuta'),
        aspectos = require('../routes/Elemento 2/aspectosRuta'),
        evaluacionXIV = require('../routes/Elemento 14/evaluacionRuta'),
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
        firmaRepresentante = require('../routes/firmaRepresentanteruta'),

        // Importaciones de las rutas para realizar las graficas no sirven hay que borrar
        // seleccionPoliticaGrafica = require('../routes/Elemento 1/Grafica/politicaGraficaRuta'),
        // evidenciaDocumentoUno = require('../routes/Elemento 1/evidenciaDocumentRuta'),
        // documentos = require('../routes/Elemento 1/PruebaCarpeta'),
        // elementoDosAspectosGrafica = require('../routes/Elemento 2/Grafica/aspectosAmbientalesRuta'),
        // analisisRutaGrafica = require('../routes/Elemento 2/Grafica/analisisRutaGrafica'),
        // aspectosGraficaRuta = require('../routes/Elemento 2/Grafica/puntoDosAspectosRuta'),
        // riesgosGraficaRuta = require('../routes/Elemento 2/Grafica/riesgosRutaGrafica'),
        // listadoAspectosGraficaRuta = require('../routes/Elemento 2/Grafica/puntoDosAspectosRuta'),
        // rutaEvidenciaNueva = require('../routes/rutaEvidenciasNueva'),
        // ruta2EvidenciaNueva = require('../routes/ruta2EvidenciasNueva'),

        //Evidences routes pothos and documents
        evidencePhotoElement1 = require('../routes/EvidencesRoutes/Element1Photo'),
        evidenceDocumentElement1 = require('../routes/EvidencesRoutes/Element1Document'),
        evidencePhotoElement2 = require('../routes/EvidencesRoutes/Element2Photo'),
        evidenceDocumentElement2 = require('../routes/EvidencesRoutes/Element2Document'),
        evidencePhotoElement4 = require('../routes/EvidencesRoutes/Element4Photo'),
        evidenceDocumentElement4 = require('../routes/EvidencesRoutes/Element4Document'),
        evidencePhotoElement5 = require('../routes/EvidencesRoutes/Element5Photo'),
        evidenceDocumentElement5 = require('../routes/EvidencesRoutes/Element5Document'),
        evidencePhotoElement6 = require('../routes/EvidencesRoutes/Element6Photo'),
        evidenceDocumentElement6 = require('../routes/EvidencesRoutes/Element6Document'),
        evidencePhotoElement7 = require('../routes/EvidencesRoutes/Element7Photo'),
        evidenceDocumentElement7 = require('../routes/EvidencesRoutes/Element7Document'),
        evidencePhotoElement8 = require('../routes/EvidencesRoutes/Element8Photo'),
        evidenceDocumentElement8 = require('../routes/EvidencesRoutes/Element8Document'),
        evidencePhotoElement10 = require('../routes/EvidencesRoutes/Element10Photo'),
        evidenceDocumentElement10 = require('../routes/EvidencesRoutes/Element10Document'),
        evidencePhotoElement11 = require('../routes/EvidencesRoutes/Element11Photo'),
        evidenceDocumentElement11 = require('../routes/EvidencesRoutes/Element11Document'),
        evidencePhotoElement12 = require('../routes/EvidencesRoutes/Element12Photo'),
        evidenceDocumentElement12 = require('../routes/EvidencesRoutes/Element12Document'),
        evidencePhotoElement13 = require('../routes/EvidencesRoutes/Element13Photo'),
        evidenceDocumentElement13 = require('../routes/EvidencesRoutes/Element13Document'),
        evidencePhotoElement14 = require('../routes/EvidencesRoutes/Element14Photo'),
        evidenceDocumentElement14 = require('../routes/EvidencesRoutes/Element14Document'),
        evidencePhotoElement15 = require('../routes/EvidencesRoutes/Element15Photo'),
        evidenceDocumentElement15 = require('../routes/EvidencesRoutes/Element15Document'),
        evidencePhotoElement16 = require('../routes/EvidencesRoutes/Element16Photo'),
        evidenceDocumentElement16 = require('../routes/EvidencesRoutes/Element16Document'),
        evidencePhotoElement17 = require('../routes/EvidencesRoutes/Element17Photo'),
        evidenceDocumentElement17 = require('../routes/EvidencesRoutes/Element17Document'),


        simulacro = require('../routes/Elemento 13/simulacroRuta'),
        simulacro2 = require('../routes/Elemento 13/simulacro2Ruta'),
        simulacro3 = require('../routes/Elemento 13/simulacro3Ruta'),
        simulacro4 = require('../routes/Elemento 13/simulacro4Ruta'),
        simulacro5 = require('../routes/Elemento 13/simulacro5Ruta'),
        app = express(),
        cors = require('cors');


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

    // const storage = multer.diskStorage({
    //     destination: path.join(__dirname, '../Evidencias'),
    //     filename: (req, file, cb, filename)=>{
    //         console.log(file);
    //         cb(null, uuid() +path.extname(file.originalname));************************ quitar lo comentado
    //     }
    // });


    


     

    //Se realiza el middleware para subir evidencia
    //app.use(multer({ storage }).single('image'));************************************* quitar lo comentado

    //  DESCARGAR DOCUMENTOS DES DE LAS CARPETAS ESTATICAS

    app.get('/download/:name',(req,res)=>{
        let name = req.params.name;
        //const name = 'delfin0_0.jpg' 
       // res.send(`C:/Users/softo/Escritorio/back-oms/subidas/617a8360-778f-4c54-9c8b-4ec96511bf32.PNG`)  
        const file = `C:/Users/softo/Escritorio/back-oms/Evidencias/${name}`;
       // res.send(file);
        res.download(file);
    })

    app.use(express.json());
    //Carpetas estaticas para los ficheros
    app.use('/Evidencias', express.static('Evidencias'));
    app.use('/Evidences', express.static('public/uploads/Elemento1/photos'));
    app.use('/public/uploads/Elemento1/photos',express.static('public/uploads/Elemento1/photos'));
    

    app.use('/img',evidenciaUnoRuta);
    app.use('/unoDocuments',evidenciaDocumentsUno);
    app.use('/evidenciaDocUno',evidenciaDocumentsUno);
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
    app.use('/firmaRepresentante',firmaRepresentante);
    app.use('/equipoCritico', onceEquipo);
    app.use('/evaluacion', evaluacionXIV);
    app.use('/simulacro', simulacro);
    app.use('/simulacro2', simulacro2);
    app.use('/simulacro3', simulacro3);
    app.use('/simulacro4', simulacro4);
    app.use('/simulacro5', simulacro5);


    // Rutas pata las graficas eliminarlas tambie
    // app.use('/seleccionPoliticaGrafica',seleccionPoliticaGrafica);
    // app.use('/evidenciaDocumentoUno',evidenciaDocumentsUno);
    // app.use('/aspectosGraficaRuta',aspectosGraficaRuta);
    // app.use('/analisisRutaGrafica',analisisRutaGrafica);
    // app.use('/riesgosGraficaRuta',riesgosGraficaRuta);
    // app.use('/listadoAspectosGraficaRuta',listadoAspectosGraficaRuta);
    // // app.use('/nuevaEvidencia',rutaEvidenciaNueva);
    // // app.use('/nuevaEvidencia2',ruta2EvidenciaNueva);

    // Evidence Routes files and photos
    app.use('/evidencePhotoElement1',evidencePhotoElement1);
    app.use('/evidenceDocumentElement1',evidenceDocumentElement1);
    app.use('/evidenceDocumentElement2',evidenceDocumentElement2);
    app.use('/evidencePhotoElement2',evidencePhotoElement2);
    app.use('/evidenceDocumentElement4',evidenceDocumentElement4);
    app.use('/evidencePhotoElement4',evidencePhotoElement4);
    app.use('/evidenceDocumentElement5',evidenceDocumentElement5);
    app.use('/evidencePhotoElement5',evidencePhotoElement5);
    app.use('/evidenceDocumentElement6',evidenceDocumentElement6);
    app.use('/evidencePhotoElement6',evidencePhotoElement6);
    app.use('/evidenceDocumentElement7',evidenceDocumentElement7);
    app.use('/evidencePhotoElement7',evidencePhotoElement7);
    app.use('/evidenceDocumentElement8',evidenceDocumentElement8);
    app.use('/evidencePhotoElement8',evidencePhotoElement8);
    app.use('/evidenceDocumentElement10',evidenceDocumentElement10);
    app.use('/evidencePhotoElement10',evidencePhotoElement10);
    app.use('/evidenceDocumentElement11',evidenceDocumentElement11);
    app.use('/evidencePhotoElement11',evidencePhotoElement11);
    app.use('/evidenceDocumentElement12',evidenceDocumentElement12);
    app.use('/evidencePhotoElement12',evidencePhotoElement12);
    app.use('/evidenceDocumentElement13',evidenceDocumentElement13);
    app.use('/evidencePhotoElement13',evidencePhotoElement13);
    app.use('/evidenceDocumentElement14',evidenceDocumentElement14);
    app.use('/evidencePhotoElement14',evidencePhotoElement14);
    app.use('/evidenceDocumentElement15',evidenceDocumentElement15);
    app.use('/evidencePhotoElement15',evidencePhotoElement15);
    app.use('/evidenceDocumentElement16',evidenceDocumentElement16);
    app.use('/evidencePhotoElement16',evidencePhotoElement16);
    app.use('/evidenceDocumentElement17',evidenceDocumentElement17);
    app.use('/evidencePhotoElement17',evidencePhotoElement17);


    // app.use('/comunicacionParticipacion',ComunicacionParticipacionConsulta)
    // app.use('')


    app.get('/', function (req, res){
        res.json({message: 'Bienvenido a la API de OMS'});
    });
    
    app.listen(process.env.PORT,() => console.log('Esta vivo'));
