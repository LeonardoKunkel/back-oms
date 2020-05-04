const express = require('express'),
      asamSeis = require('../../../models/Elemento2/aspectosAmbientales/asamSeisModel'),
      {verificarToken} = require('../../../server/middlewares/auth'),
      router = express.Router();
      
router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);
    
    let newAsamSeis = {
        F38: body.F38,
        F39: body.F39,
        N38: body.N38,
        N39: body.N39,
        M38: body.M38,
        M39: body.M39,
        VT38: body.VT38,
        VT39: body.VT39,
    }
    newAsamSeis.create(newAsamSeis,(err,crearAsamseis) => {
        if(err) {
            res.status(400).json({
                message: 'error al crear',
                err
            })
        }
        res.json({
            ok: true,
            crearAsamseis
        })
    })
    
    router.get('/',[verificarToken],(req,res) => {
        asamSeis.find().exec((err,findAsamseis) => {
            if(err) {
                res.status(400).json({
                    message: 'Error al traer',
                    err
                })
            }
            res.json({
                ok: true,
                findAsamseis
            })
        })
    })
})
module.exports = router;