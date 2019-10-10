const express = require('express'),
                {verificarToken} = require('../server/middlewares/auth'),
                grafica = require('../models/grafica')
                router = express.Router();

router.get('/grafica',  [verificarToken],( req, res  ) => {

    res.json( grafica.getDataGrafica());

});



router.post('/grafica', [verificarToken], ( req, res ) => {

    const mes      = req.body.mes;
    const unidades = Number(req.body.unidades);

    grafica.incrementarValor(mes, unidades);

   const server = Server.instance;
    server.io.emit('cambio-grafica', grafica.getDataGrafica() );


    res.json(grafica.getDataGrafica());

});