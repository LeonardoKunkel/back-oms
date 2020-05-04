const express = require('express'),
      asamCinco = require('../../../models/Elemento2/aspectosAmbientales/asamCincoModel'),
      {verificarToken} = require('../../../server/middlewares/auth'),
      router = express.Router();
      
router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);
    
    let newAsamCinco = {
        F34: body.F34,
        F35: body.F35,
        F36: body.F36,
        F37: body.F37,
        N34: body.N34,
        N35: body.N35,
        N36: body.N36,
        N37: body.N37,
        M34: body.M34,
        M35: body.M35,
        M36: body.M36,
        M37: body.M37,
        VT34: body.VT34,
        VT35: body.VT35,
        VT36: body.VT36,
        VT37: body.VT37,
    }
    newAsamCinco.create(newAsamCinco,(err,crearAsamcinco) => {
        if(err) {
            res.status(400).json({
                message: 'error al crear',
                err
            })
        }
        res.json({
            ok: true,
            crearAsamcinco
        })
    })
    
    router.get('/',[verificarToken],(req,res) => {
        asamCinco.find().exec((err,findAsamcinco) => {
            if(err) {
                res.status(400).json({
                    message: 'Error al traer',
                    err
                })
            }
            res.json({
                ok: true,
                findAsamcinco
            })
        })
    })
})
module.exports = router;