const express = require('express'),
                {verificarToken} = require('../server/middlewares/auth'),
                Puntodos = require('../models/puntodosModel')
                router = express.Router();

router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);
    const id = req.body.grupo
})

 