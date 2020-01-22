require('./config/config');

const   express     = require('express'),
        app         = express(),
        mongoose    = require('mongoose'),
        bodyParser  = require('body-parser'),
        upload      = require('express-fileupload'),
        UsuarioRoutes = require('../routes/usuario'),
        LoginRoutes = require('../routes/login'),
        AuthRoutes  = require('../routes/auth'),
        ListadoPeligros = require('../routes/listadoPeligros'),
        ResultadosRiesgos = require('../routes/resultadosRiesgos'),
        EvidenciaDos = require('../routes/evidenciaDos'),
        EvaluacionRiesgos = require('../routes/evaluacionRiesgos'),
        EvaluacioAspectosAmbientales = require('../routes/evaluacionAspectosAmbientales'),
        cors        = require('cors');

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


app.get('/', function (req, res){
    res.json({message: 'Bienvenido a la API de OMS'})
})

app.listen(process.env.PORT,() => console.log('Esta vivo'));