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
        Politica = require('../routes/Elemento1/politica'),
        ListadoPeligros = require('../routes/listadoPeligros'),
        ResultadosRiesgos = require('../routes/resultadosRiesgos'),
        EvidenciaDos = require('../routes/evidenciaDos'),
        DeteccionNecesidades = require('../routes/deteccionNecesidades'),
        MatrizResponsabilidades = require('../routes/matrizResponsabilidades'),
        EvaluacionRiesgos = require('../routes/evaluacionRiesgos'),
        //ComunicacionParticipacionConsulta = require('../routes/comunicacionParticipacionConsulta'),
        CopetenciasPersonales = require('../models/Elemento6/copetenciaPersonalModel'),
        EvaluacioAspectosAmbientales = require('../routes/evaluacionAspectosAmbientales'),
        Politica = require('../routes/Elemento 1/politica'),
        ObjetivosMetas = require('../routes/Elemento 4/objetivosMetasIndicadores'),
        cartaDesignacion = require('../routes/Elemento 5/cartaDesignacion'),
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
    app.use('/aspectosAbientales', EvaluacioAspectosAmbientales);
    app.use('/evaluacionRiesgos',EvaluacionRiesgos);
    app.use('/evidenciaDos',EvidenciaDos);
    app.use('/listadoPeligros',ListadoPeligros);
    app.use('/resultadosRiesgos',ResultadosRiesgos);
    app.use('/matrizResponsabilidades',MatrizResponsabilidades);
    app.use('/copetencias', CopetenciasPersonales);
    app.use('/deteccionNecesidades', DeteccionNecesidades);
    app.use('/politica',Politica),
    app.use('/objetivosMetas',ObjetivosMetas);
    app.use('/cartaDesignacion',cartaDesignacion);
    //app.use('/comunicacionParticipacion',ComunicacionParticipacionConsulta)
    //app.use('')



    app.get('/', function (req, res){
        res.json({message: 'Bienvenido a la API de OMS'})
    })
    
    app.listen(process.env.PORT,() => console.log('Esta vivo'));
