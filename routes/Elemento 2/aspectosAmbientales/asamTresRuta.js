const express = require('express'),
      asamTres = require('../../../models/Elemento2/aspectosAmbientales/asamTresModel'),
      {verificarToken} = require('../../../server/middlewares/auth'),
      router = express.Router();

router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);
    
    let newAsamTres = {
        F27: body.F27,
        F28: body.F28,
        F29: body.F29,
        N27: body.N27,
        N28: body.N28,
        N29: body.N29,
        M27: body.M27,
        M28: body.M28,
        M29: body.M29,
        VT27: body.VT27,
        VT28: body.VT28,
        VT29: body.VT29,
    }
    asamTres.create(newAsamTres,(err,crearAsamtres) => {
        if(err) {
            res.status(400).json({
                message: 'error al crear',
                err
            })
        }
        res.json({
            ok: true,
            crearAsamtres
        })
    })
    
    router.get('/',[verificarToken],(req,res) => {
        asamTres.find().exec((err, findAsamtres) => {
            if(err) {
                res.status(400).json({
                    message: 'Error al traer',
                    err
                })
            }
            res.json({
                ok: true,
                findAsamtres
            })
        })
    })
})
module.exports = router;